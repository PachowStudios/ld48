import { TilesetAsset, TilemapAsset } from 'assets';

export const caveTileset: TilesetAsset = {
  key: 'CAVE_TILESET',
  name: 'cave',
  url: require('./cave.tileset.png'),
};

export const caveMap: TilemapAsset = {
  key: 'CAVE_MAP',
  data: require('./cave.map.json'),
};
