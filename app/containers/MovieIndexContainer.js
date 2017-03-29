import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import MovieIndex from '../components/MovieIndex';

function mapStateToProps(state) {
  return state
};

export default connect(mapStateToProps, null)(MovieIndex);
