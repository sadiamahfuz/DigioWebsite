import React from 'react';

const menuItemStyle = {
	paddingLeft: 10,
	paddingRight: 10,
	display: 'inline-block'
};

const MenuItem = (props) => {
	return (
		<div style={menuItemStyle} className={props.text}> {props.text} </div>
	);
}

export default MenuItem