import { TilemapData } from 'tiled';
import { JsonAsset, TilesetAsset } from 'assets';

export interface TilemapAsset extends JsonAsset<TilemapData> {
  tilesets: TilesetAsset[];
}
