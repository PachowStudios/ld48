import { Game, AUTO } from 'phaser';
const logo = require('assets/phaser-logo-small.png');

class SimpleGame {
  game: Game;

  constructor() {
    this.game = new Game(800, 600, AUTO, 'content', this);
  }

  preload() {
    this.game.load.image('logo', logo);
  }

  create() {
    let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }

}

window.onload = () => {
  let game = new SimpleGame();
};