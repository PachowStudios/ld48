import { State, Tilemap } from 'phaser';
import { hubMap, hubTileset, planetsTileset } from 'assets/world';
import { playerSprite } from 'assets/player';
import { HubState } from 'ld48/states';

export class LoadState extends State {
  static readonly key = 'LOAD_STATE';

  preload() {
    this.load.spritesheet(playerSprite.key, playerSprite.url, playerSprite.frameWidth, playerSprite.frameHeight);
    
    this.load.tilemap(hubMap.key, undefined, hubMap.data, Tilemap.TILED_JSON);
    this.load.image(hubTileset.key, hubTileset.url);
    this.load.image(planetsTileset.key, planetsTileset.url);
  }

  create() {
    this.state.start(HubState.key);
  }
}
