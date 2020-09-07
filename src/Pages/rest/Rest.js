import React from 'react';
import './Rest.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemParagraph from '../../Components/portfolioItemParagraph/PortfolioItemParagraph';
import PortfolioItemImage from '../../Components/portfolioItemImage/PortfolioItemImage';

function Rest() {
  const headerText = "REST Api";
  const paragraphText1 = "In this project I build a REST Api, using the Express framework.";
  const paragraphText2 = "When building the Api, I had to ensure that it provides all the four basic types of functionality. It must be able to Create, Read, Update, and Delete resource data. Programmers often refer to these functions by the acronym CRUD.";
  const paragraphText3 = "A RESTful Api is an application program interface that uses HTTP requests to POST, GET, PUT, and DELETE data reflecting the CRUD operations.";
  const paragraphText4 = "To interact with the Api as it stands. I have added a resource of famous writers that are located in a local array called \"writers\".";
  const paragraphText5 = "Here below you can see a screenshot of a GET request in Postman from the Api and you can find the code on my Github";
  const paragraphLink1 = "https://github.com/MortenEmde/REST-api";
  const paragraphLinkText1 = "Here"

  return (
    <div className="Rest">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="RestContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemParagraph paragraphText={paragraphText2} />
        <PortfolioItemParagraph paragraphText={paragraphText3} />
        <PortfolioItemParagraph paragraphText={paragraphText4} />
        <PortfolioItemParagraph paragraphText={paragraphText5} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
        <PortfolioItemImage imageAlt="RestImage" imageFolderLocation="/Images/restLogo.png" />
      </div>
    </div>
  );
}

export default Rest;