import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Fuse from 'fuse.js';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App/App';
import wikiData from './data/wikiData';

ReactDOM.render(
  <App
    fuse={new Fuse(wikiData, require('./config/fuseOptions.json'))}
    data={wikiData}
  />,
  document.getElementById('Root') as HTMLElement
);
registerServiceWorker();
