import React, { Component } from 'react';
import Logo from './Logo'
import logo from '../images/transparent.png';
import MenuItem from "./MenuItem";
import MenuItemBurger from "./MenuItemBurger";

class Header extends Component {

    constructor(props) {
        super(props);

        this.headerStyle = {
            height: 'auto',
            padding: 20,
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 10,
            backgroundColor: 'white',
            width: '90%'
        };

        this.burgerMenuIconStyle = {
            color: '#757c8b',
        };

        this.mobileMenuStyle = {
            zIndex: 20,
			marginLeft: 'auto',
			marginRight: 'auto'
        };

        this.mobileMenuStyle = {
            display: 'flex',
            flexDirection: 'column'
        };

        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            navItems : [
                {text: 'Home', selected: true, id:'home'},
                {text: 'Our Services', selected: false, id: 'services'},
                {text: 'Contact Us', selected: false, id: 'contact'}
            ]
        };
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

    toggleMenuOnClick() {
    	if (this.state.mobileNavVisible) {
    		this.setState({...this.state, mobileNavVisible: false});
		}
		else {
            this.setState({...this.state, mobileNavVisible: true});
		}
	}

    renderMobileHeader() {
        const navItemsMappedBurger = this.state.navItems.map(item => <MenuItemBurger text={item.text} id={item.id} onClick={() => this.toggleMenuOnClick()}/>);

        if (this.state.mobileNavVisible) {
            return (
                <div className="mobileHeader">
					<div style={this.headerStyle}>
                    	<Logo logo={logo}/>
                    	<i className="fa fa-bars fa-2x" onClick={() => this.toggleMenuOnClick()} style={this.burgerMenuIconStyle}></i>
					</div>
                    <div className="navItems" style={this.mobileMenuStyle}> {navItemsMappedBurger} </div>
                </div>
            )
		}

        return (
            <div className="mobileHeader">
                <div style={this.headerStyle}>
    				<Logo logo={logo}/>
                	<i className="fa fa-bars fa-2x" onClick={() => this.toggleMenuOnClick()} style={this.burgerMenuIconStyle}></i>
				</div>
			</div>
		)
	}

	renderWideHeader() {
        const navItemsMapped = this.state.navItems.map(item => <MenuItem text={item.text} id={item.id}/>);
        return (
            <div className="wideHeader" style={this.headerStyle}>
                <Logo logo={logo}/>
                <div className="navItems">{navItemsMapped}</div>
            </div>
        )
	}

	render() {
    	if (this.state.windowWidth < 1000) {
    		return (
                this.renderMobileHeader()
			)
		}
		return (
            this.renderWideHeader()
		);
	}

};

export default Header;
