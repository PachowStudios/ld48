import { Key, KeyCode } from "phaser";
import { Vector2 } from 'ld38/primitives';
import { PhysicsPrefab, PlanetPrefabConfig } from 'ld38/prefabs';
import { LevelState, LoadState } from 'ld38/states';

export class PlanetPrefab extends PhysicsPrefab {
  private get canActivate(): boolean {
    return this.physics.overlap(this, this.state.player);
  }

  constructor(
    protected readonly config: PlanetPrefabConfig,
    protected readonly state: LevelState,
    name: string,
    position: Vector2) {
    super(config, state, name, position);
  }

  protected initPhysics() {
    super.initPhysics(true);
  }

  update() {
    super.update();

    if (this.canActivate) {
      this.loadTargetState();
    }
  }

  private loadTargetState() {
    this.game.state.start(this.config.targetState);
  }
}
