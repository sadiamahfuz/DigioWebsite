import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import OurWork from './components/pages/OurWork';
import ContactUs from './components/pages/ContactUs';
import {BreakpointProvider} from 'react-socks';
import {setDefaultBreakpoints} from 'react-socks';

setDefaultBreakpoints([
    {small: 0},
    {medium: 1000}
]);

class App extends Component {

    constructor(props) {
        super(props);

        this.fixedHeader = {
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
            height: 'auto'
        };

        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };

        this.onMobileMenuClicked = this.onMobileMenuClicked.bind(this);
    }

    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    onMobileMenuClicked() {
    	if (this.state.mobileNavVisible) {
    		this.setState({...this.state, mobileNavVisible: false});
    	}
    	else {
            this.setState({...this.state, mobileNavVisible: true});
    	}
    }

    getStyleForHeader() {
        if (this.state.mobileNavVisible) {
            return {
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 1000,
                height: 400
            };
        }
        return {
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,
            height: 200
        }

    }

    getStyleForPage() {
        if (this.state.mobileNavVisible) {
            return {
                display: 'flex',
                flexDirection: 'column',
                marginRight: 'auto',
                marginLeft: 'auto',
                maxWidth: 1200,
                marginTop: 250
            };
        }
        return {
            display: 'flex',
            flexDirection: 'column',
            marginRight: 'auto',
            marginLeft: 'auto',
            maxWidth: 1200,
            marginTop: 120
        }

    }


    render() {
        return (
            <BreakpointProvider>
                <div className="App">
                    <div style={this.fixedHeader}>
                        <Header onMobileMenuClicked={this.onMobileMenuClicked} mobileNavVisible={this.state.mobileNavVisible} windowWidth={this.state.windowWidth}/>
                    </div>
                    <div className="page" style={this.getStyleForPage()}>
                        <HomePage/>
                        <OurWork/>
                        <ContactUs/>
                    </div>
                    <Footer/>
                </div>
            </BreakpointProvider>
        );
    }
}

export default App;
