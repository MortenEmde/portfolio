import React from 'react';
import '../Styles/Centurylink.css';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import PortfolioItemParagraph from '../Components/PortfolioItemParagraph';

function Centurylink() {
  const headerText = "Centurylink";
  const paragraphText1 = "⛔️👷‍♂️⛔️This Page is still under construction. Once done it will cover: Centurylink Sustainability app";

  return (
    <div className="Centurylink">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="CenturylinkContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <img className="CenturylinkImage" src={process.env.PUBLIC_URL + '/Images/centurylinkLogo.png'} alt="centurylinkImage" />
      </div>
    </div>
  );
}

export default Centurylink;