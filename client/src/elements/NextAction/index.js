import React from 'react';
import { Button } from "semantic-ui-react";

import './style.css';

export default class NextAction extends React.Component {

    constructor (props) {
        super(props);

        this.state ={
            currentItemIndex: 0
        };

        this.onPaginationItemClick = this.onPaginationItemClick.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            currentItemIndex: nextProps.items.length - 1
        })
    }

    onPaginationItemClick (index) {
        this.setState({
            currentItemIndex: index
        });
    }

    renderPagination () {
        return (
            <div className='pagination'>
                { this.props.items.map((a, i) => {
                    return <span className={`bullet ${this.state.currentItemIndex === i ? 'current' : ''}`} key={`bullet-${i}`} onClick={() => this.onPaginationItemClick(i)}></span>;
                })}
            </div>
        );
    }

    render () {

        return (
            <div className="widget app-action-items-widget">
                <header>NEXT BEST ACTIONS</header>
                <div className="inner">
                    { this.props.items.map((item, i) => {
                        return (
                            <div className={`item ${this.state.currentItemIndex === i ? 'active' : ''}`} key={`ai-${i}`}>
                                <p><strong>{item.title}</strong></p>
                                <p>{item.description} <Button color="red" size="small">{item.buttonText}</Button> </p>
                            </div>
                        );
                    }) }
                </div>
                { this.renderPagination() }
            </div>
        );


    }
}
