import React from 'react';
import '../Styles/PortfolioItemParagraph.css';

function PortfolioItemParagraphUneven({paragraphText, paragraphLink, paragraphLinkText, paragraphImage}) {
  return (
    <div className="PortfolioItemParagraph">
      <div className="PortfolioItemParagraphEmpty"><img className="ParagraphImage" src={paragraphImage}/></div>
      <p className="PortfolioItemParagraphText">{paragraphText} <a href={paragraphLink}>{paragraphLinkText}</a></p>
    </div>
  );
}

export default PortfolioItemParagraphUneven;
