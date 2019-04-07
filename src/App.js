import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Landing from './Components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing/>
      </div>
    );
  }
}

export default App;