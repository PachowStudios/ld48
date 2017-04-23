import { State, Tilemap, ScaleManager, Tile, TilemapLayer, Camera } from 'phaser';
import { TilemapAsset } from 'assets';
import { hubMap } from 'assets/world';
import { LevelState } from 'ld38/states';
import { Prefab, PlayerPrefab } from 'ld38/prefabs';

export const MOLTEN_WORLD_STATE = 'MOLTEN_WORLD_STATE';

export class MoltenWorldState extends LevelState {
  constructor() {
    super(null);
  }
}
