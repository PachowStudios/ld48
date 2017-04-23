import { State, Tilemap, ScaleManager, Tile, TilemapLayer, Camera } from 'phaser';
import { TilemapAsset } from 'assets';
import { hubMap } from 'assets/world';
import { LevelState } from 'ld48/states';
import { Prefab, PlayerPrefab } from 'ld48/prefabs';

export const FROZEN_WORLD_STATE = 'FROZEN_WORLD_STATE';

export class FrozenWorldState extends LevelState {
  constructor() {
    super(null);
  }
}
