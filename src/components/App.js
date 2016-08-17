import React, { Component } from 'react';
import './App.css';
import EmployeeListContainer from '../containers/EmployeeListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Manage employees with this amazing app!</h2>
        </div>

        <EmployeeListContainer />
      </div>
    );
  }
}

export default App;
