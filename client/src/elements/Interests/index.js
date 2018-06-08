import React from 'react';
import * as PropTypes from "prop-types";

import './styles.css';
import DateFormatted from "../DateFormatted/index";
import { Image } from "semantic-ui-react";

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
                {
                    img: 'instagram1.png',
                    labels: ['MTB']
                },
                {
                    img: 'instagram2.png',
                    labels: ['WET', 'NATURE']
                }
            ],
            twitter: [
                {
                    author: 'outdoorandre',
                    when: '2018-04-17',
                    text: 'Ich bin gerade voll Cool in Malta zum Canyoning :D'
                },
                {
                    author: 'outdoorandre',
                    when: '2018-03-10',
                    text: 'Heute wieder Maintainbiking in Interlaken - super Wetter!'
                },
                {
                    author: 'outdoorandre',
                    when: '2018-02-20',
                    text: 'Muss mal unbedingt wieder aufs Rad steigen - habt ihr Lust am Wochenende?'
                }
            ]
        }
    }

    renderInstagramPhoto (item, i) {
        return <div key={`instagram-${i}`} className="photo">
            <Image src={item.img}/>
            <div className="tags">
                {item.labels.map((l, j) => <div className="tag" key={`instagram-${i}-tag-${j}-${l}`}>#{l}</div>)}
            </div>
        </div>;
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
                        <div className="header">Möglicherweise interessant für ihn ...</div>
                        <div className="potential">
                            {this.state.potential.map(this.renderInterest)}
                        </div>
                    </section>

                    <section>
                        <div className="header">Gefunden auf Instagram</div>
                        <div className="instagram">
                            {this.state.instagram.map(this.renderInstagramPhoto)}
                        </div>
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
