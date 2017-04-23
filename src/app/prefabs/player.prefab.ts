import { CursorKeys } from 'phaser';
import { Prefab, PrefabConfig } from 'ld48/prefabs';
import { Vector2 } from 'ld48/primitives';
import { LevelState } from 'ld48/states';
import { playerSpritesheet } from 'assets/player';

export class PlayerPrefab extends Prefab {
  private readonly keys: CursorKeys;

  constructor(
    protected readonly config: PlayerPrefabConfig,
    state: LevelState,
    name: string,
    group: string,
    position: Vector2) {
    super(config, state, name, group, position);
    this.keys = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    super.update();
    this.updateInput();
  }

  private updateInput() {
    if (this.keys.right.isDown && this.velocity.x >= 0) {
      this.velocity.x = this.config.speed;
      this.scale.set(1);
    } else if (this.keys.left.isDown && this.velocity.x <= 0) {
      this.velocity.x = -this.config.speed;
      this.scale.set(-1, 1);
    } else {
      this.velocity.x = 0;
    }
  }
}

export interface PlayerPrefabConfig extends PrefabConfig {
  speed: number;
}

export const playerPrefabConfig: PrefabConfig = {
  constructor: PlayerPrefab,
  spritesheet: playerSpritesheet,
  anchorX: 0.6,
};
