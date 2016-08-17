import React, { Component } from 'react';
import './App.css';
import EmployeeListContainer from '../containers/EmployeeListContainer';
import EmployeeForm from '../components/EmployeeForm';


class App extends Component {
  render() {
    const child = (this.props.addingEmployee)
      ? <EmployeeForm />
      : <EmployeeListContainer />

    return (
      <div className="App">
        <div className="App-header">
          <h2>Manage employees with this amazing app!</h2>
        </div>

        <div className="App-content">
          {child}
        </div>

      </div>
    );
  }
}

App.propTypes = {
  addingEmployee: React.PropTypes.bool.isRequired,
}

export default App;
