import React from 'react';
import './Rest.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function Rest() {
  const headerText = "REST Api";
  const paragraphs = [
    ["In this project I build a REST Api, using the Express framework."],
    ["When building the Api, I had to ensure that it provides all the four basic types of functionality. It must be able to Create, Read, Update, and Delete resource data. Programmers often refer to these functions by the acronym CRUD."],
    ["A RESTful Api is an application program interface that uses HTTP requests to POST, GET, PUT, and DELETE data reflecting the CRUD operations."],
    ["To interact with the Api as it stands. I have added a resource of famous writers that are located in a local array called \"writers\"."],
    ["Here below you can see a screenshot of a GET request in Postman from the Api and you can find the code on my Github", "https://github.com/MortenEmde/REST-api", "Here"]
  ];
  const imageFolderLocation = "/Images/restLogo.png";
  const imageAlt = "RestImage";
  return (
    <div className="Rest">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageAlt={imageAlt} />
    </div>
  );
}

export default Rest;
