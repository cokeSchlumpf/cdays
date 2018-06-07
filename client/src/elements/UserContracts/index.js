import React from 'react';
import * as PropTypes from "prop-types";
import { Icon, Image } from "semantic-ui-react";

import './styles.css';

export default class UserContracts extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        return <div className="app-user-contracts widget">

            <header>VERTRAGSDATEN</header>

            <div className="items">

                <div className="app-user-contracts-item health">
                    <span><Icon name="plus" fitted/></span>
                    <span>Krankenversicherung</span>
                    <span className="caret">&#9654;</span>
                </div>

                <div className="app-user-contracts-item home">
                    <span><Icon name="home"/></span>
                    <span>Hausratsversicherung</span>
                    <span className="caret">&#9654;</span>
                </div>

                <div className="app-user-contracts-item car">
                    <span><Icon name="car"/></span>
                    <span>KfZ-Versicherung</span>
                    <span className="caret">&#9654;</span>
                </div>

            </div>
        </div>
            ;
    }
}

UserContracts.defaultProps = {};

UserContracts.propTypes = {};
