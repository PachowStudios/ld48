import { State, Tilemap, ScaleManager, Tile, TilemapLayer } from 'phaser';
import { LevelState } from 'ld48/states';
import { TilemapAsset, TilesetAsset } from 'assets';
import { hubMap, hubTileset, planetsTileset } from 'assets/world';

export class HubState extends LevelState {
  static readonly key = 'HUB_STATE';

  protected get tilemap(): TilemapAsset {
    return hubMap;
  }

  protected get tilesets(): TilesetAsset[] {
    return [hubTileset, planetsTileset];
  }
}
