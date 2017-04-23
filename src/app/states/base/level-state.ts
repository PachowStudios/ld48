import { Camera, Physics } from 'phaser';
import { PlayerPrefab } from 'ld38/prefabs';
import { TilemapState } from './tilemap-state';

export abstract class LevelState extends TilemapState {
  get player(): PlayerPrefab {
    return this.prefabs.player as PlayerPrefab;
  }

  init() {
    this.physics.startSystem(Physics.ARCADE);
    this.physics.arcade.gravity.y = 1000;
  }

  create() {
    super.create();
    this.camera.follow(this.player, Camera.FOLLOW_PLATFORMER);
  }
}
