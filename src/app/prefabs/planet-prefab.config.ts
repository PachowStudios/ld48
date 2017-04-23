import { PrefabConfig, PlanetPrefab, PlanetPrefabConfig } from "ld38/prefabs";
import { planetsSpritesheet } from "assets/world";
import { EARTH_WORLD_STATE, MOLTEN_WORLD_STATE, FROZEN_WORLD_STATE, JUNGLE_WORLD_STATE } from "ld38/states";

const planetPrefabConfig: PrefabConfig = {
  constructor: PlanetPrefab,
  spritesheet: planetsSpritesheet,
};

export const earthPlanetPrefabConfig: PlanetPrefabConfig = {
  ...planetPrefabConfig,
  targetState: EARTH_WORLD_STATE,
  frame: 0,
};

export const moltenPlanetPrefabConfig: PlanetPrefabConfig = {
  ...planetPrefabConfig,
  targetState: MOLTEN_WORLD_STATE,
  frame: 1,
};

export const frozenPlanetPrefabConfig: PlanetPrefabConfig = {
  ...planetPrefabConfig,
  targetState: FROZEN_WORLD_STATE,
  frame: 2,
};

export const junglePlanetPrefabConfig: PlanetPrefabConfig = {
  ...planetPrefabConfig,
  targetState: JUNGLE_WORLD_STATE,
  frame: 3,
};
