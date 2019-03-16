import React, { Component } from 'react';
import Logo from './Logo'
import NavBar from './NavBar';
import logo from '../images/transparent.png';

class Header extends Component {
	headerStyle = {
		height: 100,
		padding: 20,
		display: 'flex',
		justifyContent: 'space-between',
		zIndex: 10,
		position: 'fixed',
		backgroundColor: 'white',
		width: '100%'
	};

	render() {
		return (
			<div className="header" style={this.headerStyle}>
				<Logo logo={logo}/>
				<NavBar />
			</div>
		);
	}

};

export default Header;
