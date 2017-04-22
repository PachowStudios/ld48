import { Asset } from 'assets';

export interface JsonAsset<T> extends Asset {
  data: T;
}
