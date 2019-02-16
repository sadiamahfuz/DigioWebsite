import React from 'react';
import MenuItem from './MenuItem';
import { Breakpoint } from 'react-socks';


const navBarStyle = {
	alignSelf: 'flex-start'
}

const navItems = [
	{text: 'Home', selected: true, path: '/'},
	{text: 'About Us', selected: false, path: '/about'},
	{text: 'Our Work', selected: false, path: '/ourwork'},
	{text: 'Testimonials', selected: false, path: 'testimonials'}
];

export const NavBar = (props) => {

	const navItemsMapped = navItems.map(item => <MenuItem text={item.text} path={item.path}/>);

	return (
		<div className="navBar" style={navBarStyle}>
		 	<Breakpoint medium up>
				{navItemsMapped}
			</Breakpoint>
			<Breakpoint small only>
				<div> To do small screen </div>
			</Breakpoint>
		</div>
	);
};

export default NavBar;
