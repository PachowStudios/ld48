import { Vector2 } from 'ld38/primitives';
import { Prefab, PlanetPrefabConfig } from 'ld38/prefabs';
import { TilemapState } from 'ld38/states';

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
