import * as React from 'react';
import './App.css';
import Input from '../../components/Input/Input';

interface AppState {
  inputValue: string;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleOnChange = (value: string): void => {
    this.setState(() => {
      return {
        inputValue: value
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Input value={this.state.inputValue} onChange={this.handleOnChange} />
      </div>
    );
  }
}
