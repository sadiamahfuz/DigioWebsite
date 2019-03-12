import React from 'react';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';

const menuItemStyle = {
	paddingLeft: 10,
	paddingRight: 10,
	display: 'inline-block',
	cursor: 'pointer',
	color: '#757c8b'
};



const MenuItem = (props) => {
	return (
		<NavLink to={props.path}>
				<Button variant="text" style={menuItemStyle} className='menuItem'> {props.text} </Button>
		</NavLink>
	);
}

export default MenuItem;
