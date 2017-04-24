import { PrefabConfig, PlayerPrefab } from "ld38/prefabs";
import { playerSpritesheet } from "assets/player";

export interface PlayerPrefabConfig extends PrefabConfig {
  speed: number;
  jumpSpeed: number;
}

export const player = () => <PlayerPrefabConfig>({
  constructor: PlayerPrefab,
  spritesheet: playerSpritesheet,
  anchorX: 0.6,
  speed: 110,
  jumpSpeed: 290,
});
