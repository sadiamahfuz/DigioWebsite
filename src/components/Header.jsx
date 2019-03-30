import React, { Component } from 'react';
import Logo from './Logo'
import logo from '../images/transparent.png';
import MenuItem from "./MenuItem";
import MenuItemBurger from "./MenuItemBurger";


class Header extends Component {

    constructor(props) {
        super(props);

        this.wideHeaderStyle = {
            height: 'auto',
            padding: 10,
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 10,
            backgroundColor: 'white'
        };

        this.mobileNavOpenHeaderStyle = {
            height: 'auto',
            zIndex: 10,
            backgroundColor: 'white'
        };

        this.mobileNavOpenTopHeaderStyle = {
            padding: 10,
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 10,
            backgroundColor: 'white'
        };

        this.burgerMenuIconStyle = {
            color: '#757c8b',
        };

        this.mobileMenuStyle = {
            zIndex: 20,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        };

        this.state = {
            navItems : [
                {text: 'Home', selected: true, id:'home'},
                {text: 'Our Services', selected: false, id: 'services'},
                {text: 'Contact Us', selected: false, id: 'contact'}
            ]
        };

    }

    renderMobileHeader() {
        const navItemsMappedBurger = this.state.navItems.map(item => <MenuItemBurger text={item.text} id={item.id} onClick={() => this.props.onMobileMenuClicked()}/>);

        if (this.props.mobileNavVisible) {
            return (
                <div className="mobileHeader" style={this.mobileNavOpenHeaderStyle}>
					<div style={this.mobileNavOpenTopHeaderStyle}>
                    	<Logo logo={logo}/>
                    	<i className="fa fa-bars fa-2x" onClick={() => this.props.onMobileMenuClicked()} style={this.burgerMenuIconStyle}></i>
					</div>
                    <hr></hr>
                    <div className="navItems" style={this.mobileMenuStyle}> {navItemsMappedBurger} </div>
                </div>
            )
		}

        return (
            <div className="mobileHeader">
                <div style={this.wideHeaderStyle}>
    				<Logo logo={logo}/>
                	<i className="fa fa-bars fa-2x" onClick={() => this.props.onMobileMenuClicked()} style={this.burgerMenuIconStyle}></i>
				</div>
			</div>
		)
	}

	renderWideHeader() {
        const navItemsMapped = this.state.navItems.map(item => <MenuItem text={item.text} id={item.id}/>);
        return (
            <div className="wideHeader" style={this.wideHeaderStyle}>
                <Logo logo={logo}/>
                <div className="navItems">{navItemsMapped}</div>
            </div>
        )
	}

	render() {
    	if (this.props.windowWidth < 1000) {
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
