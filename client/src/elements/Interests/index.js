import React from 'react';
import * as PropTypes from "prop-types";

import './styles.css';
import DateFormatted from "../DateFormatted/index";

export default class Interests extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            interests: [
                'Biking', 'Motorrad', 'Abenteuer', 'Canyoning'
            ],
            potential: [
                'Reiseversicherung', 'Unfallversicherung'
            ],
            instagram: [
                // @todo
            ],
            twitter: [
                {
                    author: 'outdoorandre',
                    when: '2018-03-17',
                    text: 'Ich bin gerade voll Cool in Malta zum Canyoning :D'
                },
                {
                    author: 'outdoorandre',
                    when: '2018-03-17',
                    text: 'Ich bin gerade voll Cool in Malta zum Canyoning :D'
                },
                {
                    author: 'outdoorandre',
                    when: '2018-03-17',
                    text: 'Ich bin gerade voll Cool in Malta zum Canyoning :D'
                }
            ]
        }
    }

    renderInterest (interest, i) {
        return <div key={`interest-${i}`} className="interest">
            {`#${interest}`}
        </div>;
    }

    renderTweet (tweet, i) {
        return <div key={`tweet-${i}`} className="tweet">
            <div><strong>{`@${tweet.author}`}</strong> <DateFormatted date={tweet.when}/></div>
            <div>{tweet.text}</div>
        </div>;
    }

    render () {
        return (
            <div className="app-interests widget">

                <header>INTERESSEN</header>

                <div className="inner">

                    <div className="interests">
                        {this.state.interests.map(this.renderInterest)}
                    </div>

                    <section>
                        <div className="header">Möglicherweise interessant für ign ...</div>
                        <div className="potential">
                            {this.state.potential.map(this.renderInterest)}
                        </div>
                    </section>

                    <section>
                        <div className="header">Gefunden auf Instagram</div>
                        @todo...
                    </section>

                    <section>
                        <div className="header">Gefunden auf Twitter</div>
                        <div className="tweets">
                            {this.state.twitter.map(this.renderTweet)}
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

Interests.defaultProps = {};

Interests.propTypes = {};
