import React from 'react';
import '../Styles/PortfolioItemParagraph.css';

function PortfolioItemParagraphUneven({paragraphText, paragraphLink, paragraphLinkText}) {
  return (
    <p className="PortfolioItemParagraphText">{paragraphText} <a href={paragraphLink}>{paragraphLinkText}</a></p>
  );
}

export default PortfolioItemParagraphUneven;
