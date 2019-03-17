import React from 'react';
import '../App.css';

const defaultLogoDivStyle = {
	height: 90,
  	width: 200
};

const defaultLogoStyle = {
  	float: 'left',
  	marginLeft: 10,
  	height: 90,
  	width: 200,
  	alignSelf: 'center'
};

const Logo = (props) => {
	return (
		<div className="logo" style={props.divStyle ? props.divStyle: defaultLogoDivStyle}>
			<img style={props.logoStyle ? props.logoStyle : defaultLogoStyle} src={props.logo} alt="Digio"/>
		</div>
	);
};

export default Logo;
