import React from 'react';
import '../Styles/Centurylink.css';
import centurylinkImage from '../Styles/Images/centurylinkLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';

function Centurylink() {
  const headerText = "Centurylink";
  return (
    <div className="Centurylink">
      <PortfolioItemHeader headerText={headerText}/>
      <p>Centurylink Sustainability app</p>
      <img className="CenturylinkImage" src={centurylinkImage} alt="centurylinkImage" />
    </div>
  );
}

export default Centurylink;