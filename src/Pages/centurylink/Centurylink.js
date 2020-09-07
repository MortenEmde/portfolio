import React from 'react';
import './Centurylink.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function Centurylink() {
  const headerText = "Centurylink";
  const paragraphs = [
    "⛔️👷‍♂️⛔️This Page is still under construction. Once done it will cover: Centurylink Sustainability app"
  ];
  const imageAlt = "CenturylinkImage";
  const imageFolderLocation = "/Images/centurylinkLogo.png";
  return (
    <div className="Centurylink">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageAlt={imageAlt} />
    </div>
  );
}

export default Centurylink;