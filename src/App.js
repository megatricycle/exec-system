import React, { Component } from 'react';
import './App.css';
import Background from './Background';
import Navigation from './Navigation';
import ExecDepartment from './ExecDepartment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background/>
        <Navigation/>
        <ExecDepartment/>
      </div>
    );
  }
}

export default App;
