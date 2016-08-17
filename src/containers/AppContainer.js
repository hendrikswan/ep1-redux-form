import { connect } from 'react-redux';
import App from '../components/App';


const mapStateToProps = (state) => ({
  addingEmployee: state.main.addingEmployee,
});


export default connect(mapStateToProps)(App);
