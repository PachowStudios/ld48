import { TilesetAsset, TilemapAsset } from 'assets';

export const hubMap: TilemapAsset = {
  key: 'HUB_MAP',
  data: require('./hub.map.json'),
};

export const hubTileset: TilesetAsset = {
  key: 'HUB_TILESET',
  name: 'hub',
  url: require('./hub.tileset.png'),
};

export const planetsTileset: TilesetAsset = {
  key: 'PLANETS_TILESET',
  name: 'planets',
  url: require('./planets.png'),
};
