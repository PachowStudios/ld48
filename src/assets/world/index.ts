import { TilesetAsset, TilemapAsset, SpritesheetAsset } from 'assets';

export const hubTileset: TilesetAsset = {
  key: 'HUB_TILESET',
  name: 'hub',
  url: require('./hub.tileset.png'),
};

export const hubMap: TilemapAsset = {
  key: 'HUB_MAP',
  data: require('./hub.map.json'),
  tilesets: [hubTileset],
};

export const planetsSpritesheet: SpritesheetAsset = {
  key: 'PLANETS_SPRITESHEET',
  url: require('./planets.png'),
  frameWidth: 32,
  frameHeight: 32,
};
