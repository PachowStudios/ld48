import { Sprite } from 'phaser';
import { Vector2 } from 'ld38/primitives';
import { TilemapState } from 'ld38/states';
import { PrefabConfig } from './prefab-config';

export class Prefab extends Sprite {
  constructor(
    protected readonly config: PrefabConfig,
    protected readonly state: TilemapState,
    name: string,
    position: Vector2) {
    super(state.game, position.x, position.y, config.spritesheet.key);
    
    this.initSprite();
  }

  protected initSprite() {
    this.anchor.set(this.config.anchorX, this.config.anchorY);
  }
}
