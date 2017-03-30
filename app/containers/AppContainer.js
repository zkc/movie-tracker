import App from '../components/app.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(App);
