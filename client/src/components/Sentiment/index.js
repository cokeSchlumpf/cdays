import Component from '../../elements/Sentiment';
import actions from './redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // const s = state.toJS();
    // return s.components.sentiment;
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const Sentiment = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default Sentiment;
