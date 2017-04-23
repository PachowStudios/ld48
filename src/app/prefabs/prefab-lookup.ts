import { Dictionary } from 'lodash';
import { PrefabConfig, playerPrefabConfig, earthPlanetPrefabConfig, moltenPlanetPrefabConfig, frozenPlanetPrefabConfig, junglePlanetPrefabConfig } from 'ld38/prefabs';
import { playerSpritesheet } from 'assets/player';

export const PREFAB_LOOKUP: Dictionary<() => PrefabConfig> = {
  player: playerPrefabConfig,
  earthPlanet: earthPlanetPrefabConfig,
  moltenPlanet: moltenPlanetPrefabConfig,
  frozenPlanet: frozenPlanetPrefabConfig,
  junglePlanet: junglePlanetPrefabConfig,
};
