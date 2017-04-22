import { State, Tilemap, ScaleManager } from 'phaser';
import { TilemapData } from 'tiled';
import { caveMap, caveTileset } from 'assets/world';

export class HubState extends State {
  static readonly id = 'HUB_STATE';

  private map: Tilemap;
  
  init() {
    this.map = this.addMap();
  }

  private addMap(): Tilemap {
    const map = this.add.tilemap(caveMap.key);
    map.addTilesetImage(caveTileset.name, caveTileset.key);

    return map;
  }

  create() {
    populateMapLayers(this.map, caveMap.data);
  }
}

function populateMapLayers(map: Tilemap, { layers }: TilemapData) {
  layers.map(layer => map.createLayer(layer.name)).forEach(layer => {
  })
}
