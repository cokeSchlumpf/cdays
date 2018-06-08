import Component from '../../elements/NextAction';
import actions from './redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    const s = state.toJS();

    const current = s.services.users.current_user;

    return {
        items: s.services.users.users[current].actions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const NextAction = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default NextAction;
