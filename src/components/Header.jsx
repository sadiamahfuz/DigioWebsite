import React from 'react';
import Logo from './Logo'
import NavBar from './NavBar';
import MenuItem from './MenuItem';

const headerStyle = {
	 height: 100,
	 display: 'flex',
	 justifyContent: 'space-between',
	 backgroundColor: '#000000'
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