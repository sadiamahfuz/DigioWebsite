import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/pages/AboutUs';
import HomePage from './components/pages/HomePage';
import OurWork from './components/pages/OurWork';
import Testimonials from './components/pages/Testimonials';
import { BreakpointProvider } from 'react-socks';

import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { small: 0 },
  { medium: 600 }
]);

class App extends Component {
  render() {
    return (
      <BreakpointProvider>
        <div className="App">
          <Header />
          <div className="page">
          	<Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/ourwork" component={OurWork}/>
            <Route path="/testimonials" component={Testimonials}/>
          </div>
        </div>
      </BreakpointProvider>
    );
  }
}

export default App;
