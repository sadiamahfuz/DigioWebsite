import React from 'react';
import logo from '../images/transparent.png';
import '../App.css';

const logoStyle = {
	height: '20%',
  	width: '20%',
  	display: 'block',
  	marginLeft: 'auto',
  	marginRight: 'auto'
};

const Logo = (props) => {
	return (
		<div classname="logo">
			<img style={logoStyle} src={logo} alt="Digio"/>
		</div>
	);
};

export default Logo;