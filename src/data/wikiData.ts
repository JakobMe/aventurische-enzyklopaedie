interface WikiDataRaw {
  [tag: string]: {
    [label: string]: string;
  };
}

export interface WikiDataItem {
  tag: string;
  label: string;
  content: string;
}

export interface WikiDataList extends Array<WikiDataItem> {}

const wikiDataRaw: WikiDataRaw = require('./wikiData.json');
const wikiData: WikiDataList = Object.keys(wikiDataRaw)
  .reduce(
    (dataAll: WikiDataList, tag: string): WikiDataList =>
      dataAll.concat(
        Object.keys(wikiDataRaw[tag]).reduce(
          (dataTag: WikiDataList, label: string): WikiDataList =>
            dataTag.concat({
              tag: tag,
              label: label,
              content: wikiDataRaw[tag][label]
            }),
          []
        )
      ),
    []
  )
  .sort((item1: WikiDataItem, item2: WikiDataItem): number =>
    item1.label.localeCompare(item2.label, 'de-DE')
  );

export default wikiData;
