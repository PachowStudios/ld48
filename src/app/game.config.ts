import { IGameConfig, CANVAS } from 'phaser';

export const GAME_SCALE = 4;

export const GAME_CONFIG: IGameConfig = {
  width: 256,
  height: 144,
  renderer: CANVAS,
  antialias: false,
  forceSetTimeOut: false,
}
