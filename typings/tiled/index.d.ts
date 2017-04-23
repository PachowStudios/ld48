declare module 'tiled' {
  export interface TilemapData {
    width: number;
    height: number;
    tileHeight: number;
    tileWidth: number;
    orientation: string;
    renderorder: string;
    nextobjectid: number;
    layers: TilemapLayerData[];
    tilesets: TilesetData;
  }

  export interface TilemapLayerData {
    name: string;
    type: string;
    width: number;
    height: number;
    opacity: number;
    visible: boolean;
    data: number[];
    properties?: any;
    propertytypes?: { [name: string]: string };
  }

  export interface TilesetData {
    name: string;
    type: string;
    width: number;
    height: number;
    margin: number;
    spacing: number;
    tilecount: number;
    tilewidth: number;
    tileheight: number;
    columns: number;
    image: string;
    imagewidth: number;
    imageheight: number;
  }
}
