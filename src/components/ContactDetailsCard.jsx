import React from 'react';

const contactDetailsCardStyle = {
  marginRight: 50,
  display: 'flex',
  flexDirection: 'column'
};

const style = {
  padding: 5
};

const ContactDetailsCard = () => {
  return (
    <div className="contactDetailsCard" style={contactDetailsCardStyle}>
    <i class="fas fa-phone" style={style}>  +44 00000 000 000</i>
    <i class="fas fa-envelope" style={style}>  email address</i>
    </div>
  );
};

export default ContactDetailsCard;
