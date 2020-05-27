import React from 'react';
import '../Styles/PortfolioItemHeader.css';

function PortfolioItemHeader({headerText}) {
  return (
    <h1 className="PortfolioItemHeader">{headerText}</h1>
  );
}

export default PortfolioItemHeader;