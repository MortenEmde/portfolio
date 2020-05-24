import React from 'react';
import '../Styles/PortfolioItemParagraph.css';

function PortfolioItemParagraphEven({paragraphText, paragraphLink, paragraphLinkText, paragraphImage}) {
  return (
    <div className="PortfolioItemParagraph">
      <p className="PortfolioItemParagraphText">{paragraphText} <a href={paragraphLink}>{paragraphLinkText}</a></p>
      <div className="PortfolioItemParagraphEmpty"><img className="ParagraphImage" src={paragraphImage}/></div>
    </div>
  );
}

export default PortfolioItemParagraphEven;
