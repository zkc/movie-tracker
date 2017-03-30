import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import MovieIndex from '../components/MovieIndex';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => {
  return { movies: state.movies }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (movies) => {
      dispatch(actions.addMovies(movies))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);
