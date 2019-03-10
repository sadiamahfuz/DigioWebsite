import React from 'react';
import Logo from './Logo';
import ContactDetailsCard from './ContactDetailsCard';
import logo from '../images/inverse.png';

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

const Footer = (props) => {
  return (
    <div style={footerStyle}>
      <Logo logo={logo}/>
      <ContactDetailsCard />
    </div>
  );
};

export default Footer;
