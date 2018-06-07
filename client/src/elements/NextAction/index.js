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

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi neque nihil obcaecati possimus
                    recusandae, repudiandae soluta. Enim eum exercitationem maiores vero! Animi dolores eveniet
                    inventore modi numquam rerum saepe?</p>

            </div>
        );

    }
}

NextAction.defaultProps = {};

NextAction.propTypes = {};
