import './styles.css';

import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';

import { CSSTransitionGroup } from 'react-transition-group'
import { FormattedRelative } from 'react-intl';
import UserInput from '../UserInput';
import _ from 'lodash';
import cx from 'classnames';
import logo from './logo.svg';

class DoodyChat extends Component {

  static get defaultProps() {
    return {
      doodyMessages: [],
      doodyTyping: false,
      doodySeen: false,
      sending: false,
      userMessage: undefined,

      onUserMessage: () => { }
    }
  }

  render() {
    const doodyMessages = _.map(this.props.doodyMessages, (doodyMessage, idx) => <div className='doody-bubble-transition' key={`doody-bubble-${idx}`}><Segment className='doody-bubble'>{doodyMessage}</Segment></div>);

    const doodyBubblesClassNames = cx({
      'doody-bubbles': true,
      'typing': this.props.doodyTyping,
      'with-messages': _.size(doodyMessages) > 0
    });

    return (
      <Container className='doody-chat-container'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={7}>
              <img src={logo} alt='doody.travel Logo' className='doody-chat-logo' />
            </Grid.Column>
            <Grid.Column className="user-bubbles-history" width={9}>
              {this.props.userMessage &&
                <Segment className="user-bubble">
                  {this.props.userMessage.message}

                  <p className="user-bubbles-sent">
                    Von dir gesendet <FormattedRelative value={this.props.userMessage.sent} /> { this.props.doodySeen ? <Icon size='large' name='check circle outline' /> : <Icon size='large' name='radio' /> }
                  </p>
                </Segment>
              }
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {this.props.doodyTyping && <div className='typing-text'>schreibt dir ...</div>}
            <CSSTransitionGroup
              transitionName='doody-bubble-transition'
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
              component={Grid.Column}
              width={9}
              className={doodyBubblesClassNames}>
              {doodyMessages}
            </CSSTransitionGroup>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} className="user-bubbles">
              <UserInput onMessage={this.props.onUserMessage} loading={this.props.sending} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>)
  }

}

export default DoodyChat;