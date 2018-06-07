import 'semantic-ui-css/semantic.min.css';
import '../styles.css';

import { Button, Welcome } from '@storybook/react/demo';
import { IntlProvider, addLocaleData } from 'react-intl';
import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import DoodyChat from '../elements/DoodyChat';
import UserInput from '../elements/UserInput';
import _ from 'lodash';
import { action } from '@storybook/addon-actions';
import de from 'react-intl/locale-data/de';
import deMessages from '../resources/i18n/de.json'
import flattenObject from '../utils/flatten-object';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('UserInput', module)
  .addDecorator(story => <Container style={{ marginTop: '20px' }}>{story()}</Container>)
  .add('Default', () => <UserInput onMessage={action('onMessage')} />)
  .add('Custom suggestions', () => <UserInput onMessage={action('onMessage')} suggestions={['message 1', 'message 2', 'message 3']} />);

storiesOf('DoodyChat', module)
  .addDecorator(story => <Container style={{ padding: '20px', backgroundColor: '#247BA0' }}>{story()}</Container>)
  .add('Default', () => {
    class DoodyChatWrapper extends Component {
      state = {
        doodyMessages: [],
        doodyTyping: false,
        userMessage: undefined,
        received: false,
        sending: false
      }

      componentDidMount() {
        this.setState({ doodyMessages: [], timeout: window.setTimeout(this.addDoodyMessage(1), 1000) })
      }
    
      componentWillUnmount() {
        clearTimeout(this.state.timeout);
      }

      addDoodyMessage = (counter = 0) => () => {
        this.setState({ 
          doodyMessages: _.concat(this.state.doodyMessages, 'Lorem ipsum dolor sit amet del amor fio rumo'),
          doodyTyping: counter > 0,
          received: true,
          sending: false,
          timeout: counter > 0 && window.setTimeout(this.addDoodyMessage(counter - 1), 3000)
        });
      }

      onUserMessage = (message) => {
        clearTimeout(this.state.timeout);

        this.setState({
          doodyMessages: [],
          doodyTyping: true,
          sending: true,
          received: false,
          userMessage: {
            message,
            sent: new Date(),
            timeout: window.setTimeout(this.addDoodyMessage(1), 3000)
          }
        });
        action('onUserMessage')(message);
      }

      render() {
        addLocaleData([...de]);

        return (
          <IntlProvider defaultLocale='de' locale='de' messages={deMessages}>
            <DoodyChat
              doodyMessages={this.state.doodyMessages}
              doodyTyping={this.state.doodyTyping}
              doodySeen={this.state.received}
              sending={this.state.sending}
              userMessage={this.state.userMessage}
              onUserMessage={this.onUserMessage} />
          </IntlProvider>);
      }
    }

    return <DoodyChatWrapper />
  })