import { Game, State } from 'phaser';
import { GAME_SCALE } from 'ld38';
import { ScaledCanvasPlugin } from 'ld38/plugins';
import { LoadState, LOAD_STATE } from 'ld38/states';

export class BootState extends State {
  create() {
    function loadPlugins({ plugins }: Game) {
      plugins.add(ScaledCanvasPlugin, GAME_SCALE)
    }

    loadPlugins(this.game);

    this.game.renderer.renderSession.roundPixels = true;
    this.state.start(LOAD_STATE);
  }
}
