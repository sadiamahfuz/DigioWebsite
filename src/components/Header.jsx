import React from 'react';
import Logo from './Logo'
import '../App.css';

const headerStyle = {
	 marginTop: 5
}

const Header = (props) => {
	return (
		<div classname="header" style={headerStyle}>
			<Logo />
		</div>
	);
};

export default Header;