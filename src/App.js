import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import OurWork from './components/pages/OurWork';
import ContactUs from './components/pages/ContactUs';
import { BreakpointProvider } from 'react-socks';
import { StickyContainer, Sticky } from "react-sticky";
import { setDefaultBreakpoints } from 'react-socks';

setDefaultBreakpoints([
  { small: 0 },
  { medium: 700 }
]);

class App extends Component {
  pageStyle = {
    display: 'flex',
    flexDirection: 'column'
  }

  render() {
    return (
      <BreakpointProvider>
          <div className="App">
          <Header />
            <div className="page" style={this.pageStyle}>
            	<HomePage />
              <OurWork />
              <ContactUs />
            </div>
          <Footer />
        </div>
      </BreakpointProvider>
    );
  }
}

export default App;
