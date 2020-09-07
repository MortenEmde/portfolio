import React from 'react';
import './Centurylink.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemParagraph from '../../Components/portfolioItemParagraph/PortfolioItemParagraph';
import PortfolioItemImage from '../../Components/portfolioItemImage/PortfolioItemImage';

function Centurylink() {
  const headerText = "Centurylink";
  const paragraphText1 = "⛔️👷‍♂️⛔️This Page is still under construction. Once done it will cover: Centurylink Sustainability app";

  return (
    <div className="Centurylink">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="CenturylinkContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemImage imageAlt="CenturylinkImage" imageFolderLocation="/Images/centurylinkLogo.png" />
      </div>
    </div>
  );
}

export default Centurylink;