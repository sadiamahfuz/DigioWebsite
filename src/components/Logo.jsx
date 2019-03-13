import React from 'react';
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
		<div className="logo" style={logoDivStyle}>
			<img style={logoStyle} src={props.logo} alt="Digio"/>
		</div>
	);
};

export default Logo;
