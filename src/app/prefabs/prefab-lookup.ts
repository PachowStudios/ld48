import { Dictionary } from 'lodash';
import { Prefab, PrefabConfig, playerPrefabConfig } from 'ld48/prefabs';
import { playerSpritesheet } from 'assets/player';

export const prefabLookup: Dictionary<PrefabConfig> = {
  player: playerPrefabConfig,
};
