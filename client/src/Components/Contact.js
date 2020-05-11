import React from 'react';
import '../Styles/Contact.css';
import logo from '../Styles/Images/logo512.png';

function Contact() {
  return (
    <div className="Contact">
      <h1>Hello Contact!</h1>
      <img className="HeadShot" src={logo} alt="Logo" />
    </div>
  );
}

export default Contact;
