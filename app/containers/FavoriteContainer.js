import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Favorites from '../components/Favorites.js';
import * as actions from '../actions/actions.js';


const mapStateToProps = (state)=>  {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavs: (favorites) => {
      dispatch(actions.addFavs(favorites))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
