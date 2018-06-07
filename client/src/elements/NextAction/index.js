import React from 'react';
import * as PropTypes from "prop-types";
import { Button, Segment } from "semantic-ui-react";

export default class NextAction extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="widget">
                <header>NEXT BEST ACTIONS</header>
                <div className="inner">
                    <p><strong>Vertragsanebot schreiben</strong></p>
                    <p>Vertragsanebot an den Kunden via Post versenden <Button color="red" size="small">GO!</Button></p>
                </div>
            </div>
        );

    }
}

NextAction.defaultProps = {};

NextAction.propTypes = {};
