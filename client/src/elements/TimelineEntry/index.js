import React from 'react';
import * as PropTypes from "prop-types";
import { Button, Icon, Label } from "semantic-ui-react";
import moment from "moment";
import DateFormatted from "../DateFormatted";

import './style.css';

export default class TimelineEntry extends React.Component {

    constructor (props) {
        super(props);
    }

    getIconFromType (type) {
        switch (type) {
            case 'email':
                return 'envelope';
            case 'call':
                return 'phone';
            case 'chat':
                return 'comments';
            case 'letter':
                return 'file text';
            default:
                return 'sticky note';
        }
    }

    renderActionButton () {
        return (<Button size="small" basic secondary>
            <Icon name="send"/> Send the offer
        </Button>);
    }

    render () {
        return (
            <div className="timeline-entry">

                <div className="bullet">
                    <span className="mark">
                        <DateFormatted date={this.props.date} format="D"/><br/>
                        <DateFormatted date={this.props.date} format="MMM"/>
                    </span>
                </div>

                <div className="details">

                    <div className="type">
                        <Icon name={this.getIconFromType(this.props.type)}/>
                    </div>

                    <div className="content">
                        <div className="label">
                            <strong>{this.props.subject}</strong>
                        </div>

                        <div className="info">

                            <div>
                                Versicherungsberater/in: {this.props.agent}
                            </div>
                            <div>
                                <DateFormatted date={this.props.date} format='MMMM Do YYYY, h:mm:ss a'/>
                            </div>
                        </div>
                    </div>

                    <div className="labels">
                        {this.props.labels.map((l, i) => {
                            return <div key={`tag-${i}`}><Label as='a' tag>{l}</Label></div>
                        })}
                    </div>

                </div>


            </div>
        );
    }
}

TimelineEntry.defaultProps = {
    labels: []
};

TimelineEntry.propTypes = {
    type: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    agent: PropTypes.string.isRequired,
    labels: PropTypes.array
};
