import React from 'react';
import * as PropTypes from "prop-types";
import { Button, Image, Segment } from "semantic-ui-react";

export default class Sentiment extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="widget">
                <header>SENTIMENT</header>
                <div className="inner">
                    <Image src="sentiment.png" style={{maxHeight: '90px'}}/>
                </div>
            </div>
        );

    }
}

Sentiment.defaultProps = {};

Sentiment.propTypes = {};
