import React from 'react';
import Logo from './Logo'
import NavBar from './NavBar';
import MenuItem from './MenuItem';

const headerStyle = {
	 marginTop: 5,
	 height: 90,
	 display: 'flex',
	 justifyContent: 'space-between'
}

const Header = (props) => {
	//const items = [{text: 'sadia'}, {text: 'sami'}];

	return (
		<div classname="header" style={headerStyle}>
			<Logo />
			<NavBar />
		</div>
	);
};

export default Header;