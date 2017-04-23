import { State, Tilemap, ScaleManager, Tile, TilemapLayer } from 'phaser';
import { LevelState } from 'ld48/states';
import { TilemapAsset, TilesetAsset } from 'assets';
import { caveMap, caveTileset } from 'assets/world';

export class HubState extends LevelState {
  static readonly id = 'HUB_STATE';

  protected get tilemap(): TilemapAsset {
    return caveMap;
  }

  protected get tilesets(): TilesetAsset[] {
    return [caveTileset];
  }
}
