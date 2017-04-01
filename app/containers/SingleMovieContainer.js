import SingleMovie from '../components/SingleMovie.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (movie_id) => {
      dispatch(actions.removeFav(movie_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);