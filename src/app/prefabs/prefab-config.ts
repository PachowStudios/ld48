import { SpritesheetAsset } from 'assets';
import { Prefab } from 'ld38/prefabs';

export interface PrefabConfig {
  constructor: typeof Prefab;
  spritesheet: SpritesheetAsset;
  anchorX?: number;
  anchorY?: number;
}
