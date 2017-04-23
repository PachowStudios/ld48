import { Game, State } from 'phaser';
import { GAME_SCALE } from 'ld48';
import { ScaledCanvasPlugin } from 'ld48/plugins';
import { LoadState } from 'ld48/states';

export class BootState extends State {
  static readonly key = 'BOOT_STATE';

  create() {
    function loadPlugins({ plugins }: Game) {
      plugins.add(ScaledCanvasPlugin, GAME_SCALE)
    }

    loadPlugins(this.game);

    this.state.start(LoadState.key);
  }
}
