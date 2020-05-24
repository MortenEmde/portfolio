import React from 'react';
import '../Styles/Salt.css';
import saltImage from '../Styles/Images/saltLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';

function Salt() {
  const headerText = "</Salt>"

  return (
    <div className="Salt">
      <PortfolioItemHeader headerText={headerText}/>
      <p>&lt;/Salt&gt;: Fullstack JavaScript bootcamp</p>
      <p>upload and highlight weekend test's</p>
      <img className="SaltImage" src={saltImage} alt="saltImage" />
    </div>
  );
}

export default Salt;