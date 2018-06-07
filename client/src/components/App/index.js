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
      <div>
        {visible && <FixedMenu />}

        <Visibility onBottomPassed={this.showFixedMenu} onBottomVisible={this.hideFixedMenu} once={false}>
          <Segment inverted textAlign='center' style={{ padding: '1em 0em' }}>
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Startseite</Menu.Item>
                <Menu.Item as='a'>Für Reisevermittler</Menu.Item>
                <Menu.Item as='a'>Für Reiseveranstalter</Menu.Item>
                <Menu.Item as='a'>Über Doody</Menu.Item>
                <Menu.Item position='right' style={{ paddingRight: 0 }}>
                  <Button as='a' inverted>Registrieren</Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Anmelden</Button>
                </Menu.Item>
              </Menu>
            </Container>

            <DoodyChat />
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          Lorem ipsum dolor sit amet ...
        </Segment>
      </div>);
  }
}

export default App;
