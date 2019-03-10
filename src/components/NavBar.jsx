import React from 'react';
import MenuItem from './MenuItem';
import MenuItemBurger from './MenuItemBurger';
import { Breakpoint } from 'react-socks';

const navBarStyle = {
	alignSelf: 'flex-start'
}

const smallScreenMenuStyle = {
	display: 'none'
};

const burgerMenuIconStyle = {
	color: '#757c8b'
};

const navItems = [
	{text: 'Home', selected: true, path: '/'},
	{text: 'About Us', selected: false, path: '/about'},
	{text: 'Our Work', selected: false, path: '/ourwork'},
	{text: 'Blog', selected: false, path: '/blog'}
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
	const navItemsMappedBurger = navItems.map(item => <MenuItemBurger text={item.text} path={item.path} onClick={burgerToggle}/>);

	return (
		<div className="navBar" style={navBarStyle}>
		 	<Breakpoint medium up>
				{navItemsMapped}
			</Breakpoint>
			<Breakpoint small only>
				<i className="fa fa-bars fa-2x" onClick={burgerToggle} style={burgerMenuIconStyle}></i>
				<div className="smallScreenMenu" style={smallScreenMenuStyle}> {navItemsMappedBurger} </div>
			</Breakpoint>
		</div>
	);
};

export default NavBar;
