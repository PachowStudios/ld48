import { Prefab, PrefabProperties } from 'ld48/prefabs';
import { Vector2 } from 'ld48/primitives';
import { LevelState } from 'ld48/states';

export class PlayerPrefab extends Prefab {
  constructor(state: LevelState, properties: PrefabProperties, name: string, position: Vector2) {
    super(state, properties, name, position);
  }
}
