import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/Login';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => {
  return { user: state.user }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => {
      dispatch(actions.signIn(user))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
