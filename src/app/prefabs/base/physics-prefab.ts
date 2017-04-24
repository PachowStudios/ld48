import { Physics, Point } from 'phaser';
import { Vector2 } from 'ld38/primitives';
import { TilemapState } from 'ld38/states';
import { Prefab } from './prefab';
import { PrefabConfig } from './prefab-config';

import Arcade = Physics.Arcade;

export class PhysicsPrefab extends Prefab {
  body: Arcade.Body;

  protected get physics(): Arcade {
    return this.game.physics.arcade;
  }

  protected get velocity(): Point {
    return this.body.velocity;
  }

  constructor(
    config: PrefabConfig,
    state: TilemapState,
    name: string,
    position: Vector2) {
    super(config, state, name, position);

    this.initPhysics();
  }

  protected initPhysics(isStatic = false) {
    this.game.physics.arcade.enable(this);

    if (isStatic) {
      this.body.immovable = true;
      this.body.allowGravity = false;
    }
  }

  protected collideWithWorld() {
    this.physics.collide(this, this.state.collisionLayers);
  }
}
