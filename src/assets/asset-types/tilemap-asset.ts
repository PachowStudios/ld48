import { TiledTilemap } from 'tiled';
import { JsonAsset, TilesetAsset } from 'assets';

export interface TilemapAsset extends JsonAsset<TiledTilemap> {
  tilesets: TilesetAsset[];
}
