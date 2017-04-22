import { Game } from 'phaser';
import { GAME_CONFIG, BootState } from "ld48";

start();

function start() {
  const game = new Game(GAME_CONFIG);

  game.state.add(BootState.id, BootState)
  game.state.start(BootState.id);
}
