import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AboutUs from './components/pages/AboutUs';
import HomePage from './components/pages/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page">
        	<HomePage />
        </div>
      </div>
    );
  }
}

export default App;

