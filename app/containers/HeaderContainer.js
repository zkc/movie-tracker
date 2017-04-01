import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Header from '../components/Header.js';

const mapStateToProps = (state)=>  {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(actions.signOut)
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
