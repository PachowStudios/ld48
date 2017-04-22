import { IGameConfig, CANVAS } from "phaser";

export const GAME_SCALE = 3;

export const GAME_CONFIG: IGameConfig = {
  width: 320,
  height: 180,
  renderer: CANVAS,
  antialias: false,
  forceSetTimeOut: false,
}
