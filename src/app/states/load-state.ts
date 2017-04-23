import { State, Tilemap, Loader } from 'phaser';
import { HubState } from 'ld48/states';
import { TilemapAsset, SpritesheetAsset } from 'assets';
import { hubMap } from 'assets/world';
import { playerSpritesheet } from 'assets/player';

export class LoadState extends State {
  static readonly key = 'LOAD_STATE';

  preload() {
    loadSpritesheet(this.load, playerSpritesheet);
    loadTilemap(this.load, hubMap);
  }

  create() {
    this.state.start(HubState.key);
  }
}

function loadSpritesheet(loader: Loader, spritesheet: SpritesheetAsset) {
  loader.spritesheet(spritesheet.key, spritesheet.url, spritesheet.frameWidth, spritesheet.frameHeight);
}

function loadTilemap(loader: Loader, tilemap: TilemapAsset) {
  loader.tilemap(tilemap.key, undefined, tilemap.data, Tilemap.TILED_JSON);
  tilemap.tilesets.forEach(ts => loader.image(ts.key, ts.url));
}
