import './styles.css';

import { Button, Container, Grid, Menu, Segment, Visibility } from 'semantic-ui-react';
import React, { Component } from 'react';

import CaseMenu from "../../elements/CaseMenu/index";
import Chat from "../Chat";
import DoodyChat from '../DoodyChat';
import Interests from "../../elements/Interests/index";
import LifeEvents from "../../elements/LifeEvents/index";
import NextAction from "../NextAction/index";
import Sentiment from "../Sentiment/index";
import Timeline from "../Timeline";
import UserContracts from "../../elements/UserContracts/index";
import UserProfile from "../../elements/UserProfile/index";

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
                    <CaseMenu/>
                </div>
                <Grid columns={3} className="app-main-container">

                    <Grid.Row>

                        <Grid.Column className="app-sidebar-left">
                            <UserProfile/>
                            <UserContracts/>
                        </Grid.Column>

                        <Grid.Column className="app-main">

                            <Grid columns={2} stretched className="app-main-widgets">
                                <Grid.Row>
                                    <Grid.Column>
                                        <NextAction/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Sentiment/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                            <div className="app-main-timeline">
                                <Timeline/>
                            </div>
                        </Grid.Column>

                        <Grid.Column className="app-sidebar-right">
                            <LifeEvents/>
                            <Interests/>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>

                <Chat/>

            </div>
        );
    }
}

export default App;
