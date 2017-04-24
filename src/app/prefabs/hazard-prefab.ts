import { Vector2 } from 'ld38/primitives';
import { PhysicsPrefab, HazardPrefabConfig } from 'ld38/prefabs';
import { LevelState, LoadState } from 'ld38/states';

export class HazardPrefab extends PhysicsPrefab {
  constructor(
    protected readonly config: HazardPrefabConfig,
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
    this.physics.collide(this, this.state.player, () => this.damagePlayer());
  }

  private damagePlayer() {
  }
}
