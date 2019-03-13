import React from 'react';
import Logo from './Logo'
import NavBar from './NavBar';
import logo from '../images/transparent.png';

const headerStyle = {
	 height: 100,
	 margin: 20,
	 display: 'flex',
	 justifyContent: 'space-between'
}

const Header = (props) => {
	return (
		<div className="header" style={headerStyle}>
			<Logo logo={logo}/>
			<NavBar />
		</div>
	);
};

export default Header;
