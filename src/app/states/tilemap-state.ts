import { Dictionary, filter, keyBy, mapValues } from 'lodash';
import { State, Group, TilemapLayer, Tilemap, GameObjectFactory, Physics } from 'phaser';
import { TiledTilemap, TiledObjectLayer } from 'tiled';
import { TilemapAsset, TilesetAsset } from 'assets';
import { Vector2 } from 'ld38/primitives';
import { prefabLookup, Prefab } from 'ld38/prefabs';
import _ = require('lodash');

export abstract class TilemapState extends State {
  map: Tilemap;
  layers: Dictionary<TilemapLayer>;
  collisionLayers: TilemapLayer[];
  groups: Dictionary<Group>;
  prefabs: Dictionary<Prefab>;

  constructor(private readonly tilemap: TilemapAsset) {
    super();
  }

  init() {
    this.physics.startSystem(Physics.ARCADE);
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
  const layerData = keyBy(map.layers, l => l.name);

  filter(layerData, l => l.properties.collision)
    .forEach(l => map.setCollisionByExclusion([-1], true, l.name))

  const layers = mapValues(layerData, l => map.createLayer(l.name));
  layers[(<any>map.layer).name].resizeWorld();
  
  return layers;
}

function createMapGroups(factory: GameObjectFactory, map: Tilemap): Dictionary<Group> {
  const objectLayers: Dictionary<any[]> = <any>map.objects;

  return mapValues(objectLayers, (_, name) => factory.group(undefined, name));
}

function createPrefabs(state: TilemapState, map: Tilemap): Dictionary<Prefab> {
  const objectLayers: Dictionary<any[]> = <any>map.objects;

  return _(objectLayers)
    .flatMap<any>()
    .filter(o => o.type === 'prefab')
    .keyBy(o => o.name)
    .mapValues((o: any) => createPrefab(state, o.name, o.properties.prefabType, o.properties.group, o))
    .value();
}

function createPrefab(state: TilemapState, name: string, prefabType: string, group: string, position: Vector2): Prefab {
  let config = prefabLookup[prefabType];

  if (!config) {
    throw new Error(`Prefab ${prefabType} isn't registered!`);
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

  return new config.constructor(config, state, name, group, position);
}
