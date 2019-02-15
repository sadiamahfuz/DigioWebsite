import React from 'react';
import MenuItem from './MenuItem';

const navBarStyle = {
	alignSelf: 'flex-start'
}

const navItems = [
	{text: 'About Us', selected: true},
	{text: 'Our Work', selected: false},
	{text: 'Testimonials', selected: false}
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