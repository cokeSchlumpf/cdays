import Component from '../../elements/DoodyChat';
import actions from './redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const s = state.toJS();
  
  return s.components.doodyChat;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserMessage: (message) => dispatch(actions.userMessage(message))
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;
