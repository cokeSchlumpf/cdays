import _ from 'lodash';
import actions from '../redux/actions';
import errors from './errors';
import express from 'express';
import store from '../redux/store';

const api = express.Router();

/*
 * Retrieves the user information
 */
api.post('/', (req, res) => {
    const user_id = req.body.user_id;
    const message = req.body.message;

    store.dispatch(actions.client.chat.eventToClient({ message }));
    res.sendStatus(200);
});

api.post('/message', (req, res) => {
    store.dispatch({
        type: 'COMPONENTS_CHAT_BOT_MESSAGE',
        broadcast: true,
        payload: req.body
    });

    res.sendStatus(200);
});

api.post('/add-item-andre', (req, res) => {
    store.dispatch(actions.services.users.addTimelineentry('andre', req.body));

    res.sendStatus(200);
});

api.get('/', (req, res) => {
    // store.dispatch(actions.client.chat.eventToClient({ message: 'TEST MESSAGE' }));


    const id = +req.param('id');
    let msg;

    switch (id) {
        case 1:
            msg = {
                type: 'chat',
                subject: 'Adresse geändert',
                date: '2012-06-08',
                agent: 'Virtual Agent',
                action: 'check-coverage',
                labels: ['Adressänderung']
            };
            break;
        case 2:
            msg = {
                type: 'mail',
                subject: 'Prüfung der zu versichernden Objekte',
                date: '2012-06-08',
                agent: 'Virtual Agent',
                action: 'resend-coverage',
                labels: ['Deckungsprüfung', 'Hausratversicherung']
            };
            break;
        case 3:
            msg = {
                type: 'mail',
                subject: 'AW: Prüfung der zu versichernden Objekte',
                date: '2012-06-08',
                agent: '-',
                action: 'contact-change',
                labels: ['Deckungsprüfung', 'Hausratversicherung']
            };
            break;
        case 4:
            msg = {
                type: 'chat',
                subject: 'Kundengespräch Hausrat Comfort',
                date: '2012-06-08',
                agent: 'Menderes, Katharina',
                action: 'create-offer',
                labels: ['Anfrage', 'Hausratversicherung']
            };
            break;
        case 5:
            msg = {
                type: 'mail',
                subject: 'Angebot Hausrat Comfort',
                date: '2012-06-08',
                agent: 'Menderes, Katharina',
                action: 'resend-offer',
                labels: ['Angebot', 'Hausratversicherung']
            };
            break;
        case 6:
            msg = {
                type: 'letter',
                subject: 'Eingang Angebot Hausrat Comfort',
                date: '2012-06-08',
                agent: 'Menderes, Katharina',
                action: 'schedule-meeting',
                labels: ['Angebot', 'Hausratversicherung']
            };
            break;
        default:
            msg = {
                type: 'letter',
                subject: `Eingang unterzeichneter Vertrag`,
                date: '2012-03-10',
                agent: 'Sam Schaufelberg',
                action: false,
                labels: ['Motorradversicherung', 'Vertragseingang']
            };
            break;
    }


    store.dispatch(actions.services.users.addTimelineentry('andre', msg));

    res.sendStatus(200);
})
;

api.get('/user-message', (req, res) => {
    store.dispatch({
        type: 'COMPONENTS_CHAT_BOT_MESSAGE',
        broadcast: true,
        payload: {
            message: 'Hello World!',
            sender: 'Egon Olsen'
        }
    });

    store.dispatch({
        type: 'COMPONENTS_CHAT_BOT_MESSAGE',
        broadcast: true,
        payload: {
            message: 'Hallo lieber Andre!',
            sender: 'user'
        }
    });

    store.dispatch({
        type: 'COMPONENTS_CHAT_BOT_MESSAGE',
        broadcast: true,
        payload: {
            message: 'Jo!',
            sender: 'Egon Olsen'
        }
    });

    res.sendStatus(200);
});

api.get('/show-chat', (req, res) => {
    store.dispatch({
        type: 'COMPONENTS_CHAT_WINDOW_SHOW',
        broadcast: true,
        payload: {}
    });

    res.sendStatus(200);
});


module.exports = api;