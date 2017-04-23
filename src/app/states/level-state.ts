import { Dictionary, filter, keyBy, mapValues } from 'lodash';
import { State, Group, TilemapLayer, Tilemap, GameObjectFactory, Physics } from 'phaser';
import { TiledTilemap, TiledObjectLayer } from 'tiled';
import { TilemapAsset, TilesetAsset } from 'assets';
import { Vector2 } from 'ld48/primitives';
import { prefabLookup, Prefab, PrefabTags } from 'ld48/prefabs';
import _ = require('lodash');

export abstract class LevelState extends State {
  map: Tilemap;
  layers: Dictionary<TilemapLayer>;
  collisionLayers: TilemapLayer[];
  groups: Dictionary<Group>;
  prefabs: Dictionary<Prefab>;

  protected abstract get tilemap(): TilemapAsset;

  init() {
    this.physics.startSystem(Physics.ARCADE);
    this.physics.arcade.gravity.y = 500;
  }

  create() {
    populateMapObjectProperties(this.tilemap.data);
    this.map = createMap(this.add, this.tilemap);
    this.layers = createMapLayers(this.map);
    this.collisionLayers = filter(this.layers, (l: any) => l.layer.properties.collision);
    this.groups = createMapGroups(this.add, this.map);
    this.prefabs = createPrefabs(this, this.map);
  }
}

function populateMapObjectProperties(map: TiledTilemap) {
  map.layers.filter(l => l.type === 'objectgroup').forEach((layer: TiledObjectLayer) => {
    layer.objects = layer.objects.map(object => ({
      ...object,
      properties: { ...object.properties, group: layer.name },
    }));
  });
}

function createMap(factory: GameObjectFactory, tilemap: TilemapAsset): Tilemap {
  const map = factory.tilemap(tilemap.key);

  tilemap.tilesets.forEach(t => map.addTilesetImage(t.name, t.key));

  return map;
}

function createMapLayers(map: Tilemap): Dictionary<TilemapLayer> {
  const layers = keyBy(map.layers, l => l.name);

  filter(layers, l => l.properties.collision)
    .forEach(l => map.setCollisionByExclusion([-1], true, l.name))

  return mapValues(layers, l => map.createLayer(l.name));
}

function createMapGroups(factory: GameObjectFactory, map: Tilemap): Dictionary<Group> {
  const objectLayers: Dictionary<any[]> = <any>map.objects;

  return mapValues(objectLayers, (_, name) => factory.group(undefined, name));
}

function createPrefabs(state: LevelState, map: Tilemap): Dictionary<Prefab> {
  const objectLayers: Dictionary<any[]> = <any>map.objects;

  return _(objectLayers)
    .flatMap<any>()
    .keyBy(o => o.name)
    .mapValues((o: any) => createPrefab(state, o.name, o.properties, o))
    .value();
}

function createPrefab(state: LevelState, name: string, tags: PrefabTags, position: Vector2): Prefab {
  let config = prefabLookup[tags.prefabType];

  if (!config) {
    throw new Error(`Prefab ${tags.prefabType} isn't registered!`);
  }

  config = {
    anchorX: 0.5,
    anchorY: 0.5,
    ...config,
  };
  position = {
    x: position.x + config.spritesheet.frameWidth * config.anchorX,
    y: position.y - config.spritesheet.frameHeight * (1 - config.anchorY),
  };

  return new config.constructor(config, state, name, tags.group, position);
}
