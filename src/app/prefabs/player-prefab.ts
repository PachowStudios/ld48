import * as _ from 'lodash';
import { CursorKeys, Key, KeyCode } from 'phaser';
import { Vector2 } from 'ld38/primitives';
import { PhysicsPrefab, PlayerPrefabConfig } from 'ld38/prefabs';
import { LevelState } from 'ld38/states';
import { playerSpritesheet } from 'assets/player';

export class PlayerPrefab extends PhysicsPrefab {
  readonly keys: {
    left: Key,
    right: Key,
    jump: Key,
    interact: Key,
  };

  constructor(
    protected readonly config: PlayerPrefabConfig,
    protected readonly state: LevelState,
    name: string,
    position: Vector2) {
    super(config, state, name, position);

    this.keys = this.game.input.keyboard.addKeys({
      left: KeyCode.LEFT,
      right: KeyCode.RIGHT,
      jump: KeyCode.SPACEBAR,
      interact: KeyCode.SPACEBAR,
    });
  }

  protected initPhysics() {
    super.initPhysics();
    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
  }

  update() {
    super.update();
    this.collideWithWorld();
    this.checkInput();
  }

  private checkInput() {
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
      this.body.velocity.y = -this.config.jumpSpeed;
    }
  }
}
