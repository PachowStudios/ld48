import { State, Tilemap, Loader } from 'phaser';
import { HubState, HUB_STATE } from 'ld38/states';
import { TilemapAsset, SpritesheetAsset } from 'assets';
import { hubMap, planetsSpritesheet } from 'assets/world';
import { playerSpritesheet } from 'assets/player';

export const LOAD_STATE = 'LOAD_STATE';

export class LoadState extends State {
  preload() {
    loadSpritesheet(this.load, playerSpritesheet);
    loadSpritesheet(this.load, planetsSpritesheet)
    loadTilemap(this.load, hubMap);
  }

  create() {
    this.state.start(HUB_STATE);
  }
}

function loadSpritesheet(loader: Loader, spritesheet: SpritesheetAsset) {
  loader.spritesheet(spritesheet.key, spritesheet.url, spritesheet.frameWidth, spritesheet.frameHeight);
}

function loadTilemap(loader: Loader, tilemap: TilemapAsset) {
  loader.tilemap(tilemap.key, undefined, tilemap.data, Tilemap.TILED_JSON);
  tilemap.tilesets.forEach(ts => loader.image(ts.key, ts.url));
}
