import { fromJS } from 'immutable';
import { types } from './actions';

// TODO: Insert the actual entries - See below:
/*
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
*/

export const initialState = fromJS({
    current_user: 'andre',
    users: {
        andre: {
            history: [
                {
                    type: 'letter',
                    subject: 'Eingang unterzeichneter Vertrag',
                    date: '2012-03-10',
                    agent: 'Sam Schaufelberg',
                    action: false,
                    labels: ['Motorradversicherung', 'Vertragseingang']
                },
                {
                    type: 'letter',
                    subject: 'Eingang unterzeichneter Vertrag',
                    date: '2012-03-10',
                    agent: 'Sam Schaufelberg',
                    action: false,
                    labels: ['Motorradversicherung', 'Vertragseingang']
                }
            ],
            actions: [
                {
                    type: 'email',
                    title: 'Unfallversicherung anbieten',
                    description: 'Der Kunde ist aktiv im Outdoor-Sport, Interesse an Unfallversicherung prüfen',
                    buttonText: 'Termin vereinbaren',
                    action: 'schedule-meeting'
                }
            ]
        }
    }
});

const addTimelineentry = (state, { item, user }) => {

    let actionItem;
    switch (item.action) {
        case 'check-coverage':
            actionItem = {
                type: 'email',
                title: 'Hausratdeckung prüfen',
                description: 'Der Kunde ist umgezogen, Aktualität der Hausratdeckung prüfen',
                buttonText: 'Anfrage senden',
                action: 'check-coverage'
            };
            break;
        case 'resend-coverage':
            actionItem = {
                type: 'email',
                title: 'Hausratprüfung erinnern',
                description: 'Der Kunde ist zur Erfassung zu versichernder Objekte aufgefordert, ggf. nachfassen.',
                buttonText: 'Erinnerung senden',
                action: 'resend-coverage'
            };
            break;
        case 'contact-change':
            actionItem = {
                type: 'email',
                title: 'Hausratversicherung umstellen',
                description: 'Der Kunde möchte einen Fernseher mitversichern. Umstellung auf Hausrat Comfort anbieten',
                buttonText: 'Kunde kontaktieren',
                action: 'contact-change'
            };
            break;
        case 'create-offer':
            actionItem = {
                type: 'email',
                title: 'Angebot Hausrat Comfort',
                description: 'Angebot Hausrat Comfort erstellen und senden',
                buttonText: 'Angebot erstellen',
                action: 'create-offer'
            };
            break;
        case 'resend-offer':
            actionItem = {
                type: 'email',
                title: 'Angebot Hausrat Comfort erinnern',
                description: 'Angebot gesendet, ggf. nachfassen',
                buttonText: 'Kunde kontaktieren',
                action: 'resend-offer'
            };
            break;
        case 'schedule-meeting':
            actionItem = {
                type: 'email',
                title: 'Unfallversicherung anbieten',
                description: 'Der Kunde ist aktiv im Outdoor-Sport, Interesse an Unfallversicherung prüfen',
                buttonText: 'Termin vereinbaren',
                action: 'schedule-meeting'
            };
            break;
    }

    return state
        .updateIn(['users', user, 'history'], history => history.push(item))
        .updateIn(['users', user, 'actions'], actions => actions.push(actionItem))
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TIMELINEENTRY:
            return addTimelineentry(state, action.payload);
        default:
            return state;
    }
};
