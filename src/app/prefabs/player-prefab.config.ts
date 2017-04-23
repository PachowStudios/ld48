import { PlayerPrefabConfig, PlayerPrefab } from "ld48/prefabs";
import { playerSpritesheet } from "assets/player";

export const playerPrefabConfig: PlayerPrefabConfig = {
  constructor: PlayerPrefab,
  spritesheet: playerSpritesheet,
  anchorX: 0.6,
  speed: 110,
};
