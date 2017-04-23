declare module 'tiled' {
  export type TiledLayer = TiledTileLayer | TiledObjectLayer;
  export type TiledProperty = number | boolean | string;

  export interface TiledEntityWithProperties {
    properties?: { [name: string]: TiledProperty };
    propertytypes?: { [name: string]: string };
  }

  export interface TiledTilemap {
    width: number;
    height: number;
    tileHeight: number;
    tileWidth: number;
    orientation: string;
    renderorder: string;
    nextobjectid: number;
    layers: TiledLayer[];
    tilesets: TiledTileset;
  }

  export interface TiledBasicLayer extends TiledEntityWithProperties {
    name: string;
    type: string;
    width: number;
    height: number;
    opacity: number;
    visible: boolean;
  }

  export interface TiledTileLayer extends TiledBasicLayer {
    type: 'tilelayer';
    data: string;
    encoding: string;
  }

  export interface TiledObjectLayer extends TiledBasicLayer {
    type: 'objectgroup';
    objects: TiledObject[];
  }

  export interface TiledObject extends TiledEntityWithProperties {
    gid?: number;
    id: number;
    name: string;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    visible: boolean;
  }

  export interface TiledTileset {
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
