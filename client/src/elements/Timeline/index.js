import './style.css';

import * as PropTypes from "prop-types";

import React from 'react';
import { Segment } from "semantic-ui-react";
import TimelineEntry from "../TimelineEntry/index";
import _ from 'lodash';

export default class Timeline extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h2>Kontakthistorie</h2>

                <div className="timeline">
                  { _.map(this.props.items, (item, index) => <TimelineEntry key={ `key-${index}` } {...item} />) }
                </div>

            </div>
        );
    }
}
