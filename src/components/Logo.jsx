import React from 'react';
import logo from '../images/transparent.png';
import '../App.css';

const logoDivStyle = {
	height: 90,
  	width: 200
}
const logoStyle = {
  	float: 'left',
  	marginLeft: 10,
  	height: 90,
  	width: 200,
  	alignSelf: 'center'
};

const Logo = (props) => {
	return (
		<div classname="logo" style={logoDivStyle}>
			<img style={logoStyle} src={logo} alt="Digio"/>
		</div>
	);
};

export default Logo;