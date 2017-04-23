import { SpritesheetAsset } from 'assets';
import { Prefab } from './prefab';

export interface PrefabConfig {
  constructor: typeof Prefab;
  spritesheet: SpritesheetAsset;
  anchorX?: number;
  anchorY?: number;
}
