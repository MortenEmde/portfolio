import React from 'react';
import '../Styles/Centurylink.css';
import centurylinkImage from '../Styles/Images/centurylinkLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import PortfolioItemParagraph from '../Components/PortfolioItemParagraph';

function Centurylink() {
  const headerText = "Centurylink";
  const paragraphText1 = "Centurylink Sustainability app";

  return (
    <div className="Centurylink">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="CenturylinkContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <img className="CenturylinkImage" src={centurylinkImage} alt="centurylinkImage" />
      </div>
    </div>
  );
}

export default Centurylink;