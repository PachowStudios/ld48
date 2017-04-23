import { Sprite } from 'phaser';
import { Vector2 } from 'ld38/primitives';
import { PrefabConfig } from 'ld38/prefabs';
import { TilemapState } from 'ld38/states';

export class Prefab extends Sprite {
  constructor(
    protected readonly config: PrefabConfig,
    protected readonly state: TilemapState,
    name: string,
    group: string,
    position: Vector2) {
    super(state.game, position.x, position.y, config.spritesheet.key);
    this.state.groups[group].add(this);
    this.initSprite();
  }

  private initSprite() {
    this.anchor.set(this.config.anchorX, this.config.anchorY);
  }
}
