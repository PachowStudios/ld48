import { Plugin, Game, PluginManager, ScaleManager, Canvas } from 'phaser';

interface CanvasRef {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
}

export class ScaledCanvasPlugin extends Plugin {
  private scaledCanvas: CanvasRef;

  constructor(game: Game, parent: PluginManager) {
    super(game, parent);
  }

  init(gameScale: number) {
    function createScaledCanvas({ config, canvas: originalCanvas }: Game): CanvasRef {
      originalCanvas.style.display = 'none';

      const width = config.width * gameScale;
      const height = config.height * gameScale;
      const canvas = Canvas.create(undefined, width, height, 'scaled-canvas', true);
      const context = canvas.getContext('2d');

      Canvas.addToDOM(canvas, undefined);
      Canvas.setSmoothingEnabled(context, false);

      return { canvas, context, width, height };
    }

    this.scaledCanvas = createScaledCanvas(this.game);
  }

  render() {
    this.scaledCanvas.context.drawImage(
      this.game.canvas,
      0, 0, this.game.width, this.game.height,
      0, 0, this.scaledCanvas.width, this.scaledCanvas.height);
  }
}
