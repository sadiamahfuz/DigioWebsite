import React from 'react';
import MenuItem from './MenuItem';
import MediaQuery from 'react-responsive';

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
		<div>
		<MediaQuery minDeviceWidth={768}>
			<div className="navBar" style={navBarStyle}>
				{navItemsMapped}
				</div>
		</MediaQuery>
		<MediaQuery maxWidth={768}>
        <div>Ok you are on a small screen</div>
    </MediaQuery>
		</div>
	);
};

export default NavBar;
