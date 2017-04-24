import { State, Tilemap, Loader } from 'phaser';
import { HubState, HUB_STATE } from 'ld38/states';
import { TilemapAsset, SpritesheetAsset } from 'assets';
import { planetsSpritesheet, hubMap, frozenMap } from 'assets/world';
import { playerSpritesheet } from 'assets/player';
import { iceSpikesSpritesheet } from "assets/hazards";

const SPRITESHEETS = [
  playerSpritesheet,
  planetsSpritesheet,
  iceSpikesSpritesheet,
];

const TILEMAPS = [
  hubMap,
  frozenMap,
];

export class LoadState extends State {
  preload() {
    SPRITESHEETS.forEach(a => loadSpritesheet(this.load, a));
    TILEMAPS.forEach(a => loadTilemap(this.load, a));
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
