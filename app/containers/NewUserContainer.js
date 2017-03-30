import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewUser from '../components/NewUser';
import * as actions from '../actions/actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => {
      dispatch(actions.signIn(user))
    }
  }
};

export default connect(null, mapDispatchToProps)(NewUser);
