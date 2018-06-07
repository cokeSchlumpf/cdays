import Component from '../../elements/NextAction';
import actions from './redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // const s = state.toJS();
    // return s.components.nextAction;
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const NextAction = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default NextAction;
