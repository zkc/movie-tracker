import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Favorites from '../components/Favorites.js';

const mapStateToProps = (state)=>  {
  return state
};

export default connect(mapStateToProps, null)(Favorites);