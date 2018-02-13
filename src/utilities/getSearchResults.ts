import * as Fuse from 'fuse.js';
import wikiData, { WikiDataList } from 'data/wikiData';
import processSearchQuery from 'utilities/processSearchQuery';
import fuseOptions from 'config/fuseOptions';

const fuse: Fuse = new Fuse(wikiData, fuseOptions);

export default function getSearchResults(query: string): WikiDataList {
  const { tag, keyword } = processSearchQuery(query);
  const result = keyword ? (fuse.search(keyword) as WikiDataList) : wikiData;
  return tag ? result.filter(item => item.tag === tag) : keyword ? result : [];
}
