import { Sprite } from 'phaser';
import { LevelState } from 'ld48/states';
import { PrefabProperties } from 'ld48/prefabs';
import { Vector2 } from 'ld48/primitives';

export class Prefab extends Sprite {
  constructor(
    protected readonly state: LevelState,
    protected readonly properties: PrefabProperties,
    name: string,
    position: Vector2) {
    super(state.game, position.x, position.y, properties.texture);

    state.groups[properties.group].add(this);
  }
}
