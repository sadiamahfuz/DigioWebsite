import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header';
import AboutUs from './components/pages/AboutUs';
import HomePage from './components/pages/HomePage';
import OurWork from './components/pages/OurWork';
import Testimonials from './components/pages/Testimonials';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page">
        	<Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/ourwork" component={OurWork}/>
          <Route path="/testimonials" component={Testimonials}/>
        </div>
      </div>
    );
  }
}

export default App;

