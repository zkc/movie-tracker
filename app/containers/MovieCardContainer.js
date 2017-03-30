import MovieCard from '../components/MovieCard.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(MovieCard);