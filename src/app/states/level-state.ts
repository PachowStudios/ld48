import { Camera } from 'phaser';
import { TilemapState } from 'ld38/states';
import { PlayerPrefab } from 'ld38/prefabs';

export abstract class LevelState extends TilemapState {
  protected get player(): PlayerPrefab {
    return this.prefabs.player as PlayerPrefab;
  }

  init() {
    this.physics.arcade.gravity.y = 1000;
  }

  create() {
    super.create();
    this.camera.follow(this.player, Camera.FOLLOW_PLATFORMER);
  }
}
