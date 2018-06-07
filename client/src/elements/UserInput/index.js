import './styles.css';

import { Form, Input } from 'semantic-ui-react';
import React, { Component } from 'react';

import _ from 'lodash';

const default_suggestions = [
  'Hallo Doody!',
  'Ich möchte über Weihnachten in die Karibik fahren',
  'Was ist die günstigste Kreuzfahrt in den Sommerferien nächstes Jahr?'
];

class UserInput extends Component {
  state = {
    focus: false,
    index: 0,
    value: ''
  }

  static get defaultProps() {
    return {
      changeTimeout: 3000,
      suggestions: default_suggestions,
      loading: false,

      onMessage: () => { }
    }
  }

  componentDidMount() {
    this.setState({ timeout: window.setTimeout(this.changePlaceholder, this.props.changeTimeout) })
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  changePlaceholder = () => {
    let index = this.state.index + 1;
    if (index >= _.size(this.props.suggestions)) index = 0;
    this.setState({ index, timeout: window.setTimeout(this.changePlaceholder, this.props.changeTimeout) });
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  onFocus = (value) => () => {
    this.setState({ focus: value });
  }

  onSubmit = () => {
    if (_.size(this.state.value) > 0 && !this.props.loading) {
      this.props.onMessage(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <Input
            fluid
            className="doody-userinput"
            action={{ color: 'blue', icon: 'send', content: 'Senden', labelPosition: 'right', loading: this.props.loading }}
            onBlur={this.onFocus(false)}
            onFocus={this.onFocus(true)}
            placeholder={this.state.focus ? '' : this.props.suggestions[this.state.index]}
            value={this.state.value}
            onChange={this.onChange} />
        </Form.Field>
      </Form>)
  }
}

export default UserInput;