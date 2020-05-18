import React from 'react';
import '../Styles/Salt.css';
import saltImage from '../Styles/Images/saltLogo.png';

function Salt() {
  return (
    <div className="Salt">
      <h1>Hello Salt!</h1>
      <p>&lt;/Salt&gt;: Fullstack JavaScript bootcamp</p>
      <p>upload and highlight weekend test's</p>
      <img className="SaltImage" src={saltImage} alt="saltImage" />
    </div>
  );
}

export default Salt;