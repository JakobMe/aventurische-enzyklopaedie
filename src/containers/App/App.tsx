import './App.css';
import * as React from 'react';
import * as Fuse from 'fuse.js';
import Input from '../../components/Input/Input';
import { WikiDataList } from '../../data/wikiData';
import dangerousInnerHTML from '../../utilities/dangerousInnerHTML';
import getFuseResults from '../../utilities/getFuseResults';
import areEqual from '../../utilities/areEqual';

interface AppState {
  query: string;
  selected: number;
  results: WikiDataList;
}

interface AppProps {
  fuse: Fuse;
  data: WikiDataList;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      query: '',
      selected: 0,
      results: []
    };
  }

  handleOnChange = (value: string): void => {
    this.setState((oldState: AppState) => {
      const oldResults = oldState.results;
      const newResults = getFuseResults(this.props.fuse, value);
      return {
        query: value,
        selected: areEqual(oldResults, newResults) ? oldState.selected : 0,
        results: newResults
      };
    });
  };

  getOutput = (): string => {
    const results = this.state.results;
    return results.length ? results[this.state.selected].content : '';
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
          dangerouslySetInnerHTML={dangerousInnerHTML(this.getOutput())}
        />
      </main>
    );
  }
}
