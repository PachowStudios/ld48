import { CursorKeys, Key, KeyCode } from 'phaser';
import { Vector2 } from 'ld38/primitives';
import { PhysicsPrefab, PrefabConfig } from 'ld38/prefabs';
import { TilemapState } from 'ld38/states';
import { playerSpritesheet } from 'assets/player';

export interface PlayerPrefabConfig extends PrefabConfig {
  speed: number;
}

export class PlayerPrefab extends PhysicsPrefab {
  private readonly keys: {
    left: Key,
    right: Key,
    jump: Key,
  };

  constructor(
    protected readonly config: PlayerPrefabConfig,
    state: TilemapState,
    name: string,
    group: string,
    position: Vector2) {
    super(config, state, name, group, position);
    
    this.keys = this.game.input.keyboard.addKeys({
      left: KeyCode.LEFT,
      right: KeyCode.RIGHT,
      jump: KeyCode.SPACEBAR,
    });
  }

  update() {
    super.update();
    this.updateInput();
  }

  private updateInput() {
    if (this.keys.left.isDown && this.velocity.x <= 0) {
      this.velocity.x = -this.config.speed;
      this.scale.set(-1, 1);
    } else if (this.keys.right.isDown && this.velocity.x >= 0) {
      this.velocity.x = this.config.speed;
      this.scale.set(1);
    } else {
      this.velocity.x = 0;
    }
    if (this.keys.jump.justDown && this.body.blocked.down) {
      this.body.velocity.y = -350;
    }
  }
}
