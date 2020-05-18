import React from 'react';
import '../Styles/Centurylink.css';
import centurylinkImage from '../Styles/Images/centurylinkLogo.png';

function Centurylink() {
  return (
    <div className="Centurylink">
      <h1>Hello Centurylink!</h1>
      <p>Centurylink Sustainability app</p>
      <img className="CenturylinkImage" src={centurylinkImage} alt="centurylinkImage" />
    </div>
  );
}

export default Centurylink;