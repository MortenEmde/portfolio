import React from 'react';
import './portfolioItemContent.css'
import PortfolioItemParagraph from '../portfolioItemParagraph/PortfolioItemParagraph';
import PortfolioItemImage from '../portfolioItemImage/PortfolioItemImage';

function portfolioItemContent({paragraphs, imageFolderLocation, imageLink, imageAlt}) {
  return (
    <div className="portfolioItemContent">
      {paragraphs.map((paragraph, index) => 
        <PortfolioItemParagraph key={index} paragraphText={paragraph[0]} paragraphLink={paragraph[1]} paragraphLinkText={paragraph[2]}/>
      )}
      <PortfolioItemImage imageFolderLocation={imageFolderLocation} imageLink={imageLink} imageAlt={imageAlt} />
    </div>
  );
}

export default portfolioItemContent;
