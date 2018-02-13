import './App.css';
import * as React from 'react';
import Input from 'components/Input/Input';
import { WikiDataList } from 'data/wikiData';
import dangerousInnerHTML from 'utilities/dangerousInnerHTML';
import getSearchResults from 'utilities/getSearchResults';

interface AppState {
  query: string;
  selected: number;
  results: WikiDataList;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      query: '',
      selected: 0,
      results: []
    };
  }

  handleOnChange = (value: string): void => {
    this.setState(() => {
      return {
        query: value,
        selected: 0,
        results: getSearchResults(value)
      };
    });
  };

  getOutput = (): string => {
    return this.state.results.length
      ? this.state.results[this.state.selected].content
      : '';
  };

  render() {
    return (
      <main className="App">
        <section className="App__search">
          <Input
            className="App__input"
            value={this.state.query}
            onChange={this.handleOnChange}
          />
          <ul>
            {this.state.results.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
        </section>
        <section className="App__article">
          <article
            className="App__output"
            dangerouslySetInnerHTML={dangerousInnerHTML(this.getOutput())}
          />
        </section>
      </main>
    );
  }
}
