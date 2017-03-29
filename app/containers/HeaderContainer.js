import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Header from '../components/Header.js';

function mapStateToProps(state) {
  return state
};

export default connect(mapStateToProps, null)(Header);
