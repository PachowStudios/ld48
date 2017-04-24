import { Dictionary } from 'lodash';
import { PrefabConfig, player, planets, hazards } from 'ld38/prefabs';

export const PREFAB_LOOKUP: Dictionary<() => PrefabConfig> = {
  player,
  ...planets,
  ...hazards,
};
