import React from 'react';
import * as PropTypes from "prop-types";
import moment from "moment";

export default class DateFormatted extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <span>{moment(this.props.date).format(this.props.format)}</span>
        );
    }
}

DateFormatted.defaultProps = {};

DateFormatted.propTypes = {
    date: PropTypes.string.isRequired
};
