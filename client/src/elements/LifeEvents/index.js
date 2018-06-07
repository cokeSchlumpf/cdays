import React from 'react';
import * as PropTypes from "prop-types";

import './styles.css';
import DateFormatted from "../DateFormatted/index";
import { Icon } from "semantic-ui-react";

export default class LifeEvents extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            events: [
                {
                    date: '2017-07-18',
                    title: 'Ist umgezogen nach Bern',
                    source: 'facebook'
                },
                {
                    date: '2017-11-16',
                    title: 'Ist in einer Beziehung',
                    source: 'facebook'
                },
                {
                    date: '2017-10-16',
                    title: 'Arbaitet bei IT Hubert',
                    source: 'linkedin'
                }
            ]
        }
    }

    renderEvent (event, i) {
        return (<div key={`event-${i}-${event.date}`} className="event">
            <span className="date"><DateFormatted date={event.date} format="MM/DD"/></span>
            <span className="title">{event.title}</span>
            <span className="source"><Icon name={event.source}/></span>
        </div>);
    }

    render () {
        return (
            <div className="app-life-events widget">

                <header>LIFE EVENTS</header>

                <div className="events">
                    {this.state.events.map(this.renderEvent)}
                </div>

            </div>
        );
    }
}

LifeEvents.defaultProps = {};

LifeEvents.propTypes = {};
