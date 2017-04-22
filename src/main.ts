import { Game } from 'phaser';
import { GAME_CONFIG, BootState } from "ld48";

start();

function start() {
  const game = new Game(GAME_CONFIG);

  loadStates(game);

  game.state.start(BootState.id);
}

function loadStates(game: Game) {
  game.state.add(BootState.id, BootState)
}
