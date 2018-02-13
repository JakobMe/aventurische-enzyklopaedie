import searchConfig from 'config/searchConfig';

interface ProcessedQuery {
  tag: string;
  keyword: string;
}

export default function processSearchQuery(query: string): ProcessedQuery {
  const { tagChar, splitChar } = searchConfig;
  const search = query.split(splitChar);
  const hasTag = query.startsWith(tagChar);
  return {
    tag: hasTag ? search[0].substr(tagChar.length) : '',
    keyword: hasTag ? search.slice(1).join(splitChar) : query
  };
}
