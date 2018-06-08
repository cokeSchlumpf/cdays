import Component from '../../elements/Timeline';
import _ from 'lodash';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const s = state.toJS();

  const current = s.services.users.current_user;

  return {
    items: s.services.users.users[current].history
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const VisibleComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default VisibleComponent;
