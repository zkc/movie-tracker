import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Favorites from '../components/Favorites.js';
import * as actions from '../actions/actions.js';


const mapStateToProps = (state)=>  {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovies: (movies) => {
      dispatch(actions.addMovies(movies))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);