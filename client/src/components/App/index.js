import './styles.css';

import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react';
import React, { Component } from 'react';

import DoodyChat from '../DoodyChat';
import UserProfile from "../../elements/UserProfile/index";
import UserContracts from "../../elements/UserContracts/index";
import NextAction from "../NextAction/index";
import Sentiment from "../Sentiment/index";
import Timeline from "../../elements/Timeline/index";

const FixedMenu = () => (
    <Menu fixed='top' size='large'>
        <Container>
            <Menu.Item as='a' active>Home</Menu.Item>
        </Container>
    </Menu>);

class App extends Component {
    state = {};

    hideFixedMenu = () => this.setState({ visible: false });
    showFixedMenu = () => this.setState({ visible: true });

    onMessage = (message) => {
        console.log(message);
    }

    render () {
        const { visible } = this.state;

        return (
            <div className="app-app">
                <div className="app-header">
                    <div className="app-header-logo"></div>
                </div>
                <div className="app-cases-menu">
                    Cases Menu
                </div>
                <div className="app-main-container">
                    <div className="app-sidebar-left">
                        <UserProfile/>
                        <UserContracts/>
                    </div>
                    <div className="app-main">

                        <div className="app-main-widgets">
                            <NextAction/>
                            <Sentiment/>
                        </div>

                        <div className="app-main-timeline">
                            <Timeline/>
                        </div>

                    </div>
                    <div className="app-sidebar-right">
                        right
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
