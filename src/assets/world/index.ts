import { TilesetAsset, TilemapAsset, SpritesheetAsset } from 'assets';

export const hubMap: TilemapAsset = {
  key: 'HUB_MAP',
  data: require('./hub.map.json'),
  tilesets: [{
    key: 'HUB_TILESET',
    name: 'hub',
    url: require('./hub.tileset.png'),
  }],
};

export const frozenMap: TilemapAsset = {
  key: 'FROZEN_MAP',
  data: require('./frozen-test.map.json'),
  tilesets: [{
    key: 'FROZEN_TILESET',
    name: 'frozen',
    url: require('./frozen.tileset.png'),
  }],
};

export const planetsSpritesheet: SpritesheetAsset = {
  key: 'PLANETS_SPRITESHEET',
  url: require('./planets.png'),
  frameWidth: 32,
  frameHeight: 32,
};
