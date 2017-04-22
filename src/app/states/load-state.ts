import { State, Tilemap } from 'phaser';
import { caveMap, caveTileset } from 'assets/world';
import { HubState } from 'ld48/states';

export class LoadState extends State {
  static readonly id = 'LOAD_STATE';

  preload() {
    this.load.tilemap(caveMap.key, undefined, caveMap.data, Tilemap.TILED_JSON);
    this.load.image(caveTileset.key, caveTileset.url);
  }

  create() {
    this.state.start(HubState.id);
  }
}
