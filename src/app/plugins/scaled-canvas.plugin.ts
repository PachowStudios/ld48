import { Plugin, Game, PluginManager, ScaleManager, Canvas } from 'phaser';

interface CanvasRef {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
}

export class ScaledCanvasPlugin extends Plugin {
  private scaledCanvas: CanvasRef;

  constructor(game: Game, parent: PluginManager) {
    super(game, parent);
  }

  init(gameScale: number) {
    function setScale({ scale }: Game) {
      scale.scaleMode = ScaleManager.USER_SCALE;
      scale.setUserScale(gameScale, gameScale);
    }

    function createScaledCanvas({ config, canvas: originalCanvas }: Game): CanvasRef {
      originalCanvas.style.display = 'none';

      const canvas = Canvas.create(undefined, config.width * gameScale, config.height * gameScale);
      const context = canvas.getContext('2d');

      Canvas.addToDOM(canvas, undefined);
      Canvas.setSmoothingEnabled(context, false);

      return { canvas, context };
    }

    setScale(this.game);
    this.scaledCanvas = createScaledCanvas(this.game);
  }

  render() {
    this.scaledCanvas.context.drawImage(
      this.game.canvas,
      0, 0, this.game.width, this.game.height,
      0, 0, this.scaledCanvas.canvas.width, this.scaledCanvas.canvas.height);
  }
}
