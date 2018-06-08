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
      ]
    }
  }
});

const addTimelineentry = (state, { item, user }) => {
  return state
    .updateIn(['users', user, 'history'], history => history.insert(item, 0));
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TIMELINEENTRY:
      return addTimelineentry(state, action.payload);
    default:
      return state;
  }
};