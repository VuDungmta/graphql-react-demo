import React, { Component,  } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './conponents/users';

class App extends Component {
  
   
  render() {
    return (
      <div className="App">
        <User></User>
      </div>
    );
  }
}

export default App;
