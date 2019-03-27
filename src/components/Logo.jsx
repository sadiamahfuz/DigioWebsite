import React from 'react';
import '../App.css';

const defaultLogoDivStyle = {
  width: 160
};

const defaultLogoStyle = {
  	float: 'left',
  	marginLeft: 10,
  	width: 160,
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
