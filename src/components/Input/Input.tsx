import * as React from 'react';
import './Input.css';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default class Input extends React.Component<InputProps> {
  public static defaultProps: Partial<InputProps> = {
    placeholder: '',
    className: ''
  };

  handleOnChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange($event.currentTarget.value);
  };

  render() {
    return (
      <input
        className={`Input ${this.props.className}`}
        value={this.props.value}
        onChange={this.handleOnChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
