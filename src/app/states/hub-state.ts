import { State, Tilemap, ScaleManager, Tile, TilemapLayer, Camera } from 'phaser';
import { TilemapAsset } from 'assets';
import { hubMap } from 'assets/world';
import { LevelState } from 'ld48/states';
import { Prefab, PlayerPrefab } from 'ld48/prefabs';

export class HubState extends LevelState {
  static readonly key = 'HUB_STATE';

  constructor() {
    super(hubMap);
  }
}
