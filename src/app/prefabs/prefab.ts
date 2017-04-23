import { Sprite, Physics, Point } from 'phaser';
import { LevelState } from 'ld48/states';
import { PrefabConfig } from 'ld48/prefabs';
import { Vector2 } from 'ld48/primitives';
import Arcade = Physics.Arcade;

export class Prefab extends Sprite {
  body: Arcade.Body;

  protected get physics(): Arcade {
    return this.game.physics.arcade;
  }

  protected get velocity(): Point {
    return this.body.velocity;
  }

  constructor(
    protected readonly config: PrefabConfig,
    protected readonly state: LevelState,
    name: string,
    group: string,
    position: Vector2) {
    super(state.game, position.x, position.y, config.spritesheet.key);
    this.state.groups[group].add(this);
    this.initSprite();
    this.initPhysics();
  }

  private initSprite() {
    this.anchor.set(this.config.anchorX, this.config.anchorY);
  }

  private initPhysics() {
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
  }

  update() {
    this.state.collisionLayers.forEach(l => this.physics.collide(this, l));
  }
}
