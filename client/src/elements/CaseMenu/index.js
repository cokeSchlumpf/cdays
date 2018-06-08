import React from 'react';
import * as PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

import './style.css';

export default class CaseMenu extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="app-case-menu">

                <span className="label"><Icon name="table"/> Cases</span>

                <div className="cases">
                    <div className="case selected">
                        <Icon name="user"/> Andre Schmid
                    </div>
                    <div className="case">
                        <Icon name="user"/> Berthold Lampercht
                    </div>
                    <div className="case">
                        <Icon name="user"/> Donald Duck
                    </div>
                </div>
            </div>
        );
    }
}

CaseMenu.defaultProps = {};

CaseMenu.propTypes = {};
