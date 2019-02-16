import React from 'react';
import MenuItem from './MenuItem';
import { Breakpoint } from 'react-socks';

const navBarStyle = {
	alignSelf: 'flex-start'
}

const smallScreenMenuStyle = {
	display: 'none'
};

const navItems = [
	{text: 'Home', selected: true, path: '/'},
	{text: 'About Us', selected: false, path: '/about'},
	{text: 'Our Work', selected: false, path: '/ourwork'},
	{text: 'Testimonials', selected: false, path: 'testimonials'}
];

const burgerToggle = () => {
  let linksEl = document.querySelector('.smallScreenMenu');
  if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
};

export const NavBar = (props) => {

	const navItemsMapped = navItems.map(item => <MenuItem text={item.text} path={item.path}/>);

	return (
		<div className="navBar" style={navBarStyle}>
		 	<Breakpoint medium up>
				{navItemsMapped}
			</Breakpoint>
			<Breakpoint small only>
				<i className="fa fa-bars fa-2x" onClick={burgerToggle}></i>
				<div className="smallScreenMenu" style={smallScreenMenuStyle}> show menu </div>
			</Breakpoint>
		</div>
	);
};

export default NavBar;
