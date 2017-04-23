import { Dictionary } from 'lodash';
import { PlayerPrefab, Prefab } from 'ld48/prefabs';

export const prefabTypes: Dictionary<typeof Prefab> = {
  player: PlayerPrefab,
};
