import React from 'react';
import Logo from './Logo'
import NavBar from './NavBar';

const headerStyle = {
	 height: 100,
	 margin: 20,
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