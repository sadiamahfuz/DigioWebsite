import React from 'react';
import MenuItem from './MenuItem';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const navBarStyle = {
	alignSelf: 'flex-start'
}

const navItems = [
	{text: 'About Us'},
	{text: 'Our Work'},
	{text: 'Testimonials'}
];

export const NavBar = (props) => {

	const navItemsMapped = navItems.map(item => <MenuItem text={item.text} />);

	return (
		<div className="navBar" style={navBarStyle}>
			{navItemsMapped}
		</div>
	);
};

export default NavBar;