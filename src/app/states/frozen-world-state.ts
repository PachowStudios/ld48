import { State, Tilemap, ScaleManager, Tile, TilemapLayer, Camera } from 'phaser';
import { TilemapAsset } from 'assets';
import { frozenMap } from 'assets/world';
import { LevelState } from 'ld38/states';
import { Prefab, PlayerPrefab } from 'ld38/prefabs';

export class FrozenWorldState extends LevelState {
  constructor() {
    super(frozenMap);
  }
}
