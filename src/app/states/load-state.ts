import { State, Tilemap } from 'phaser';
import { caveMap, caveTileset } from 'assets/world';
import { playerSprite } from 'assets/player';
import { HubState } from 'ld48/states';

export class LoadState extends State {
  static readonly id = 'LOAD_STATE';

  preload() {
    this.load.spritesheet(playerSprite.key, playerSprite.url, playerSprite.frameWidth, playerSprite.frameHeight);
    
    this.load.tilemap(caveMap.key, undefined, caveMap.data, Tilemap.TILED_JSON);
    this.load.image(caveTileset.key, caveTileset.url);
  }

  create() {
    this.state.start(HubState.id);
  }
}
