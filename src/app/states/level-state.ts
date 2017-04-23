import { Dictionary, forEach, mapValues } from 'lodash';
import { State, Group, TilemapLayer, Tilemap, GameObjectFactory } from 'phaser';
import { TilemapAsset, TilesetAsset } from 'assets';
import { Vector2 } from 'ld48/primitives';
import { prefabTypes, PrefabProperties, Prefab } from 'ld48/prefabs';
import _ = require('lodash');

export abstract class LevelState extends State {
  map: Tilemap;
  layers: Dictionary<TilemapLayer> = {};
  groups: Dictionary<Group> = {}
  prefabs: Dictionary<Prefab> = {}

  protected abstract get tilemap(): TilemapAsset;
  protected abstract get tilesets(): TilesetAsset[];

  create() {
    this.map = createMap(this.add, this.tilemap, this.tilesets);
    this.layers = createMapLayers(this.map);

    populateMapObjectValues(this.map);
    this.groups = createMapGroups(this.add, this.map);
    this.prefabs = createPrefabs(this, this.map);
  }
}

function createMap(factory: GameObjectFactory, tilemap: TilemapAsset, tilesets: TilesetAsset[]): Tilemap {
  const map = factory.tilemap(tilemap.key);
  
  tilesets.forEach(t => map.addTilesetImage(t.name, t.key));

  return map;
}

function createMapLayers(map: Tilemap): Dictionary<TilemapLayer> {
  return _(map.layers)
    .keyBy(l => l.name)
    .mapValues((data: any) => {
      const layer = map.createLayer(data.name)

      if (data.properties.collision) {
        map.setCollisionByExclusion([-1]);
      }

      return layer;
    })
    .value();
}

function populateMapObjectValues(map: Tilemap) {
  const objectLayers: Dictionary<any[]> = <any>map.objects;

  forEach(objectLayers, (objects, name) => {
    objects.forEach(object => {
      object.properties.group = name;
      object.position = {
        x: object.x - map.tileWidth,
        y: object.y - map.tileHeight,
      };
    })
  });
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
    .mapValues((o: any) => createPrefab(state, o.type, o.name, o.position, o.properties))
    .value();
}

function createPrefab(state: LevelState, type: string, name: string, position: Vector2, properties: PrefabProperties): Prefab {
  const prefabConstructor = prefabTypes[type];

  if (!prefabConstructor) {
    throw new Error(`Prefab ${type} isn't registered!`);
  }

  return new prefabConstructor(state, properties, name, position);
}
