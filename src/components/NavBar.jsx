import React from 'react';
import MenuItem from './MenuItem';

import { setDefaultBreakpoints, Breakpoint } from 'react-socks';
setDefaultBreakpoints([
  { xs: 0 },
  { s: 376 },
  { m: 600 },
  { small: 769 },
  { large: 1025 }
]);


const navBarStyle = {
	alignSelf: 'flex-start'
};

const navItems = [
	{text: 'Home', selected: true, path: '/'},
	{text: 'About Us', selected: false, path: '/about'},
	{text: 'Our Work', selected: false, path: '/ourwork'},
	{text: 'Testimonials', selected: false, path: 'testimonials'}
];

export const NavBar = (props) => {

	const navItemsMapped = navItems.map(item => <MenuItem text={item.text} path={item.path}/>);

	return (
		<Breakpoint m up>
			<div className="navBar" style={navBarStyle}>
				{navItemsMapped}
			</div>
		</Breakpoint>
	);
};

export default NavBar;
