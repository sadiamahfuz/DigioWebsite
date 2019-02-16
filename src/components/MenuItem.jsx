import React from 'react';
import { NavLink } from "react-router-dom";

const menuItemStyle = {
	paddingLeft: 10,
	paddingRight: 10,
	display: 'inline-block',
	cursor: 'pointer',
	color: '#757c8b'
};

const MenuItem = (props) => {
	return (
		<NavLink to={props.path}> <div style={menuItemStyle} className='menuItem'> {props.text} </div>  </NavLink>
	);
}

export default MenuItem;