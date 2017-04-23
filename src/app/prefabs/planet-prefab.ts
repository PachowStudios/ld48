import { Vector2 } from 'ld48/primitives';
import { Prefab, PrefabConfig } from 'ld48/prefabs';
import { TilemapState, EARTH_WORLD_STATE, MOLTEN_WORLD_STATE, FROZEN_WORLD_STATE, JUNGLE_WORLD_STATE } from 'ld48/states';
import { planetsSpritesheet } from 'assets/world';

export interface PlanetPrefabConfig extends PrefabConfig {
  targetState: string;
  frame: number;
}

export class PlanetPrefab extends Prefab {
  constructor(
    protected readonly config: PlanetPrefabConfig,
    state: TilemapState,
    name: string,
    group: string,
    position: Vector2) {
    super(config, state, name, group, position);
    this.frame = this.config.frame;
  }
}