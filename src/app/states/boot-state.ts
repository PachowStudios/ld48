import { Game, State } from "phaser";
import { ScaledCanvasPlugin, GAME_SCALE } from "ld48";
const logoImage = require('assets/phaser-logo-small.png');

export class BootState extends State {
  static readonly id = 'BOOT_STATE';

  preload() {
    this.game.load.image('logo', logoImage);
  }

  create() {
    function loadPlugins({ plugins }: Game) {
      plugins.add(ScaledCanvasPlugin, GAME_SCALE)
    }

    loadPlugins(this.game);
    const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }
}
