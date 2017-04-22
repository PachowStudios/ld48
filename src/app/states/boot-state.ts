import { Canvas, Game, State, ScaleManager } from "phaser";
import { GAME_CONFIG } from "ld48";
import { GAME_SCALE } from "ld48";
const logoImage = require('assets/phaser-logo-small.png');

interface CanvasRef {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export class BootState extends State {
  static readonly id = 'BOOT_STATE';

  private scaledCanvas: CanvasRef;
  
  init() {
    function initScale(scaleManager: ScaleManager) {
      scaleManager.scaleMode = ScaleManager.USER_SCALE;
      scaleManager.setUserScale(GAME_SCALE, GAME_SCALE);
    }

    function initScaledCanvas(originalCanvas: HTMLCanvasElement): CanvasRef {
      originalCanvas.style.display = 'none';

      const canvas = Canvas.create(undefined, GAME_CONFIG.width * GAME_SCALE, GAME_CONFIG.height * GAME_SCALE);
      const context = canvas.getContext('2d');

      Canvas.addToDOM(canvas, undefined);
      Canvas.setSmoothingEnabled(context, false);

      return { canvas, context };
    }

    initScale(this.game.scale);
    this.scaledCanvas = initScaledCanvas(this.game.canvas);
  }

  preload() {
    this.game.load.image('logo', logoImage);
  }

  create() {
    const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }

  render() {
    this.scaledCanvas.context.drawImage(
      this.game.canvas,
      0, 0, this.game.width, this.game.height,
      0, 0, this.scaledCanvas.canvas.width, this.scaledCanvas.canvas.height);
  }
}
