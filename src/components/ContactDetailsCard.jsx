import React from 'react';

const contactDetailsCardStyle = {
  marginRight: 5,
  display: 'flex',
  flexDirection: 'column',
    alignItems: 'center'
};

const eachContactStyle = {
    display: 'flex',
    padding: 5
};

const style = {
    marginLeft: 5
};

const ContactDetailsCard = () => {
  return (
    <div className="contactDetailsCard" style={contactDetailsCardStyle}>
        <div style={eachContactStyle}>
            <i className="fas fa-phone"></i>
            <span style={style}> +44 00000 000 000 </span>
        </div>
        <div style={eachContactStyle}>
            <i className="fas fa-envelope"></i>
            <a style={style} href={"mailto:" + "sadia.mahfuz@gmail.com"}>sadia.mahfuz@gmail.com</a>
        </div>
    </div>
  );
};

export default ContactDetailsCard;
