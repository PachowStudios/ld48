import { Dictionary } from "lodash";
import { PrefabConfig, HazardPrefab } from "ld38/prefabs";
import { iceSpikesSpritesheet } from "assets/hazards";

export interface HazardPrefabConfig extends PrefabConfig {
}

const baseHazard = () => ({
  constructor: HazardPrefab,
});

const baseIceSpike = () => ({
  ...baseHazard(),
  spritesheet: iceSpikesSpritesheet,
});

export const hazards: Dictionary<() => HazardPrefabConfig> = {
  iceSpike1: () => ({
    ...baseIceSpike(),
    frame: 0,
  }),
  iceSpike2: () => ({
    ...baseIceSpike(),
    frame: 1,
  }),
};
