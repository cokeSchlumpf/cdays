import React from 'react';
import { Button } from "semantic-ui-react";

export default class NextAction extends React.Component {

    constructor (props) {
        super(props);

    }

    render () {


        const item = this.props.items[0];

        return (
            <div className="widget">
                <header>NEXT BEST ACTIONS</header>
                <div className="inner">
                <div className="item">
                    <p><strong>{item.title}</strong></p>
                    <p>{item.description} <Button color="red" size="small">{item.buttonText}</Button> </p>
                </div>
            </div>
        </div>
    );


    }
}
