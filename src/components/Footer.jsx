import React from 'react';
import Logo from './Logo';
import logo from '../images/inverse.png';
import ContactDetailsCard from './ContactDetailsCard';
import { Breakpoint } from 'react-socks';

const footerStyle = {
    backgroundColor: '#757c8b',
    color: '#ffffff',
    height: 120,
    bottom: 0,
    width: '100%',
    martinTop: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const footerStyleSmall = {
    backgroundColor: '#757c8b',
    color: '#ffffff',
    height: 'auto',
    bottom: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5
};

const Footer = () => {
    return (
        <div>
            <Breakpoint medium up>
                <div style={footerStyle}>
                    <Logo logo={logo}/>
                    <ContactDetailsCard />
                </div>
            </Breakpoint>
            <Breakpoint small only>
                <div style={footerStyleSmall}>
                    <ContactDetailsCard />
                    <Logo logo={logo}/>
                </div>
            </Breakpoint>
        </div>
    );
};

export default Footer;
