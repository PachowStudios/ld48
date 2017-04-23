import { ImageAsset } from 'assets';

export interface SpritesheetAsset extends ImageAsset {
  frameWidth: number;
  frameHeight: number;
}
