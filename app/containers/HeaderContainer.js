import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header.js';
import * as actions from '../actions/thunkActions.js';



const mapStateToProps = (state)=>  {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
