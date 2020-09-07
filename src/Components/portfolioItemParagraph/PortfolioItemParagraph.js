import React from 'react';
import './PortfolioItemParagraph.css';

function PortfolioItemParagraph({paragraphText, paragraphLink, paragraphLinkText}) {
  return (
    <p className="PortfolioItemParagraphText">{paragraphText} <a href={paragraphLink} target="_blank" rel="noopener noreferrer">{paragraphLinkText}</a></p>
  );
}

export default PortfolioItemParagraph;
