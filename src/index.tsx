import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App/App';
import fuseOptions from './config/fuseOptions';
import './index.css';

ReactDOM.render(<App fuseOptions={fuseOptions} />, document.getElementById(
  'Root'
) as HTMLElement);
registerServiceWorker();
