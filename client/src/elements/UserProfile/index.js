import React from 'react';
import * as PropTypes from "prop-types";
import { Icon, Image, Segment } from "semantic-ui-react";

import './styles.css';

class UserProfile extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            profile: {
                name: 'Andre Shmid',
                position: 'Automechaniker',
                addressStreet: 'Bundesgasse 31',
                addressCity: '3001 Bern',
                age: '01.01.1990 (28)',
                maritalStatus: 'Ledig',
                contact: {
                    phone: '+41 123 34 56 78',
                    email: 'andre_schmid@outlook.de'
                },
                customer: {
                    id: 12345,
                    joined: 'März 2012'
                }
            }
        };
    }

    render () {

        return <div className="app-user-profile widget">

            <header>KUNDEN - DETAILS</header>

            <div className="contents">

                <section className="position">{this.state.profile.position}</section>

                <Image src="Andre.jpg" size='small' floated='left'/>

                <section>
                    <div>{this.state.profile.addressStreet}</div>
                    <div>{this.state.profile.addressCity}</div>
                </section>

                <section>
                    <div><Icon name='birthday'/> {this.state.profile.age}</div>
                    <div><Icon name='users'/> {this.state.profile.maritalStatus}</div>
                </section>

                <section>
                    <div><Icon name='phone'/> {this.state.profile.contact.phone}</div>
                    <div><Icon name='envelope'/> {this.state.profile.contact.email}</div>
                    <div><Icon name="comments outline"/> Bevorzugtes Kontaktmittel</div>
                </section>

                <section>
                    <div><Icon name='hashtag'/> Kundennummer {this.state.profile.customer.id}</div>
                    <div><Icon name='clock'/> seit {this.state.profile.customer.joined}</div>
                </section>

                <section>
                    <Icon name='facebook official' style={{ color: '#3b5998' }} size="big"/>
                    <Icon name='instagram' style={{ color: '#cd486b' }} size="big"/>
                    <Icon name='twitter square' style={{ color: '#00aced' }} size="big"/>
                </section>

            </div>
        </div>;
    }
}

UserProfile.defaultProps = {};

UserProfile.propTypes = {};

export default UserProfile;
