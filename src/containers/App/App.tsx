import * as React from 'react';
import './App.css';
import Input from '../../components/Input/Input';
import wikiData, { WikiData } from '../../data/wikiData';
import * as Fuse from 'fuse.js';

interface AppState {
  query: string;
}

interface AppProps {
  fuseOptions: Fuse.FuseOptions;
}

export default class App extends React.Component<AppProps, AppState> {
  private wikiData: WikiData;
  private fuse: Fuse;

  constructor(props: AppProps) {
    super(props);

    this.wikiData = wikiData;
    this.fuse = new Fuse(this.wikiData, props.fuseOptions);

    this.state = {
      query: ''
    };
  }

  handleOnChange = (value: string): void => {
    this.setState(() => {
      return {
        query: value
      };
    });
  };

  getResultHtml = (): { __html: string } => {
    const results = this.fuse.search(this.state.query) as WikiData;
    return {
      __html: results.length ? results[0].content : ''
    };
  };

  render() {
    return (
      <main className="App">
        <Input
          className="App__input"
          value={this.state.query}
          onChange={this.handleOnChange}
        />
        <article
          className="App__output"
          dangerouslySetInnerHTML={this.getResultHtml()}
        />
      </main>
    );
  }
}
