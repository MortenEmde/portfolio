import React from 'react';
import './PageHeader.css';

function PageHeader({headerText}) {
  return (
    <h1 className="PageHeader">{headerText}</h1>
  );
}

export default PageHeader;