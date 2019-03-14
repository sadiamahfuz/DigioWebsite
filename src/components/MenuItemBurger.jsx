import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";

const menuItemStyle = {
	paddingLeft: 10,
	paddingRight: 10,
	display: 'block',
	cursor: 'pointer',
	color: '#757c8b'
};

const MenuItemBurger = (props) => {
	return (
		<Link to={props.id} duration={500} offset={-50} smooth={true}>
				<Button variant='text' style={menuItemStyle} className='menuItem' onClick={props.onClick}> {props.text} </Button>
		</Link>
	);
}

export default MenuItemBurger;
