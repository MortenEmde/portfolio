import React from 'react';
import './PortfolioItemImage.css';

function PortfolioItemImage({imageFolderLocation, imageLink, imageAlt}) {
  return (
    <a href={imageLink} target="_blank" rel="noopener noreferrer"><img className="PortfolioItemImage" src={process.env.PUBLIC_URL + imageFolderLocation} alt={imageAlt} /></a>
  );
}

export default PortfolioItemImage;
