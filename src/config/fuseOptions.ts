import { FuseOptions } from 'fuse.js';

const fuseOptions: FuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['label']
};

export default fuseOptions;
