import React from 'react';

const footerStyle = {
  backgroundColor: '#757c8b',
  color: '#ffffff',
  height: 100,
  position: 'absolute',
  bottom: 0,
  width: '100%'
};

const Footer = (props) => {
  return (
    <div style={footerStyle}> This is the footer </div>
  );
};

export default Footer;
