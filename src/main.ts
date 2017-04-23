import { Game } from 'phaser';
import { GAME_CONFIG } from 'ld48';
import { BootState, LoadState, HubState } from 'ld48/states';

window.onload = () => start();

function start() {
  const game = new Game(GAME_CONFIG);

  game.state.add(BootState.id, BootState);
  game.state.add(LoadState.id, LoadState);
  game.state.add(HubState.id, HubState);
  game.state.start(BootState.id);
}
