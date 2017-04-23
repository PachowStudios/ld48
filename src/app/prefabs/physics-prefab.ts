import { Physics, Point } from 'phaser';
import { Vector2 } from 'ld48/primitives';
import { Prefab, PrefabConfig } from 'ld48/prefabs';
import { TilemapState } from 'ld48/states';
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
    group: string,
    position: Vector2) {
    super(config, state, name, group, position);
    this.state.groups[group].add(this);
    this.initPhysics();
  }

  private initPhysics() {
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
  }

  update() {
    super.update();
    this.state.collisionLayers.forEach(l => this.physics.collide(this, l));
  }
}
