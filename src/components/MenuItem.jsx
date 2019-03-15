import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";

const menuItemStyle = {
	paddingLeft: 10,
	paddingRight: 10,
	display: 'inline-block',
	cursor: 'pointer',
	color: '#757c8b'
};



const MenuItem = (props) => {
	return (
		<Link to={props.id} duration={500} offset={-200} smooth={true}>
				<Button variant="text" style={menuItemStyle} className='menuItem'> {props.text} </Button>
		</Link>
	);
}

export default MenuItem;
