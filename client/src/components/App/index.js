import './styles.css';

import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react';
import React, { Component } from 'react';

import DoodyChat from '../DoodyChat';

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
    </Container>
  </Menu>);

class App extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  onMessage = (message) => {
    console.log(message);
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="app-app">
        <div className="app-header">
          HEADER !!!!!!
        </div>
      </div>);
  }
}

export default App;
