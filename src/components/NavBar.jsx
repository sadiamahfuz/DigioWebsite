import React, {Component} from 'react';
import MenuItem from './MenuItem';
import MenuItemBurger from './MenuItemBurger';
import { Breakpoint } from 'react-socks';


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };
    }

     burgerToggle = () => {
        let linksEl = document.querySelector('.smallScreenMenu');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    };

	render() {
        const navBarStyle = {
            alignSelf: 'flex-start',
        };

        const smallScreenMenuStyle = {
            display: 'none'
        };

        const burgerMenuIconStyle = {
            color: '#757c8b',
        };

        const navItems = [
            {text: 'Home', selected: true, id:'home'},
            {text: 'Our Services', selected: false, id: 'services'},
            {text: 'Contact Us', selected: false, id: 'contact'}
        ];

        const navItemsMapped = navItems.map(item => <MenuItem text={item.text} id={item.id}/>);
        const navItemsMappedBurger = navItems.map(item => <MenuItemBurger text={item.text} id={item.id} onClick={this.burgerToggle}/>);

        return (
            <div className="navBar" style={navBarStyle}>
                <Breakpoint medium up>
                    {navItemsMapped}
                </Breakpoint>
                <Breakpoint small only>
                    <i className="fa fa-bars fa-2x" onClick={this.burgerToggle} style={burgerMenuIconStyle}></i>
                    <div className="smallScreenMenu" style={smallScreenMenuStyle}> {navItemsMappedBurger} </div>
                </Breakpoint>
            </div>
        );
	}

};

export default NavBar;
