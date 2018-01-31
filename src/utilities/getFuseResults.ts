import * as Fuse from 'fuse.js';
import { WikiDataList } from '../data/wikiData';

export default function getFuseResults(
  fuse: Fuse,
  query: string,
  size: number = 10
): WikiDataList {
  return fuse.search(query).slice(0, size) as WikiDataList;
}
