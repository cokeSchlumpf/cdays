import React from 'react';
import * as PropTypes from "prop-types";

import { Segment } from "semantic-ui-react";
import TimelineEntry from "../TimelineEntry/index";

import './style.css';

export default class Timeline extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h2>Kontakthistorie</h2>

                <div className="timeline">

                    <TimelineEntry
                        type="call"
                        subject="Schadenmeldung Motorrad Hagelschaden"
                        date="2017-09-14"
                        agent="Vanessa Keller"
                        action={false}
                        labels={['Motorradversicherung', 'Schadenmeldung', 'Hagelschaden']}
                    />

                    <TimelineEntry
                        type="email"
                        subject="Schadenmeldung Gesprungenes Handydisplay"
                        date="2016-03-31"
                        agent="Jerome Buldi"
                        action={false}
                        labels={['Hausratversicherung', 'Schadenmeldung', 'Hagelschaden']}
                    />

                    <TimelineEntry
                        type="letter"
                        subject="Eingang unterzeichneter Vertrag"
                        date="2013-05-25"
                        agent="Nicole Kengi"
                        action={false}
                        labels={['Hausratversicherung', 'Vertragseingang']}
                    />

                    <TimelineEntry
                        type="call"
                        subject="Beratungsgespräch zur Hausratsversicherung"
                        date="2013-05-25"
                        agent="Nicole Kengi"
                        action={false}
                        labels={['Hausratversicherung', 'Beratungsgespräch']}
                    />

                    <TimelineEntry
                        type="email"
                        subject="Änderung der Telefonnummer"
                        date="2013-04-20"
                        agent="Dominik Lohman"
                        action={false}
                        labels={['Adressänderung']}
                    />

                    <TimelineEntry
                        type="letter"
                        subject="Eingang unterzeichneter Vertrag"
                        date="2012-03-10"
                        agent="Sam Schaufelberg"
                        action={false}
                        labels={['Motorradversicherung', 'Vertragseingang']}
                    />


                </div>

            </div>
        );
    }
}
