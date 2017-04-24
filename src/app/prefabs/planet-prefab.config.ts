import { Dictionary } from "lodash";
import { PrefabConfig, PlanetPrefab } from "ld38/prefabs";
import { planetsSpritesheet } from "assets/world";
import { EARTH_WORLD_STATE, MOLTEN_WORLD_STATE, FROZEN_WORLD_STATE, JUNGLE_WORLD_STATE } from "ld38/states";

export interface PlanetPrefabConfig extends PrefabConfig {
  targetState: string;
}

const basePlanet = () => ({
  constructor: PlanetPrefab,
  spritesheet: planetsSpritesheet,
});

export const planets: Dictionary<() => PlanetPrefabConfig> = {
  earthPlanet: () => ({
    ...basePlanet(),
    targetState: EARTH_WORLD_STATE,
    frame: 0,
  }),
  moltenPlanet: () => ({
    ...basePlanet(),
    targetState: MOLTEN_WORLD_STATE,
    frame: 1,
  }),
  frozenPlanet: () => ({
    ...basePlanet(),
    targetState: FROZEN_WORLD_STATE,
    frame: 2,
  }),
  junglePlanet: () => ({
    ...basePlanet(),
    targetState: JUNGLE_WORLD_STATE,
    frame: 3,
  }),
};
