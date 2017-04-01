import MovieCard from '../components/MovieCard.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavs: (movies) => {
      dispatch(actions.addFavs(movies))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);