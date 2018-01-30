interface WikiDataRaw {
  [tag: string]: {
    [label: string]: string;
  };
}

interface WikiDataItem {
  tag: string;
  label: string;
  content: string;
}

const wikiDataRaw: WikiDataRaw = require('./wikiData.json');
const wikiData: WikiData = Object.keys(wikiDataRaw).reduce(
  (dataAll: WikiData, tag: string): WikiData =>
    dataAll.concat(
      Object.keys(wikiDataRaw[tag]).reduce(
        (dataTag: WikiData, label: string): WikiData =>
          dataTag.concat({
            tag: tag,
            label: label,
            content: wikiDataRaw[tag][label]
          }),
        []
      )
    ),
  []
);

export interface WikiData extends Array<WikiDataItem> {}
export default wikiData;
