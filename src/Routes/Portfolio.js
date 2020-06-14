import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Portfolio.css';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import PortfolioItemParagraph from '../Components/PortfolioItemParagraph';

function Portfolio() {
  const headerText = "Portfolio";
  const paragraphText1 = "This whole website has been put together by myself using react and hosted on Heroku. It is thereby an interactive part of my portfolio."
  const paragraphText2 = "You can find the code for the full site on my Github";
  const paragraphLink1 = "https://github.com/MortenEmde/portfolio";
  const paragraphLinkText1 = "Here"

  const PortfolioLinkData = [
    {
      route: "/portfolio/rest",
      imageType: "PortfolioImageTall",
      imageSrc: "/Images/restLogo.png",
      imageAlt: "restLogo",
      title: "REST Api",
      info: "REST Api build using the Express framework."
    },
    {
      route: "/portfolio/centurylink",
      imageType: "PortfolioImageTall",
      imageSrc: "/Images/centurylinkLogo.png",
      imageAlt: "centurylinkLogo",
      title: "Centurylink Sustainability app",
      info: "&lt;/Salt&gt; examination MVP for Centurylink."
    },
    {
      route: "/portfolio/hackday",
      imageType: "PortfolioImage",
      imageSrc: "/Images/hackdayLogo.png",
      imageAlt: "hackdayLogo",
      title: "Hackday",
      info: "1 day challenge to integrate frontend with backend extenal api call."
    },
    {
      route: "/portfolio/todo",
      imageType: "PortfolioImage",
      imageSrc: "/Images/todoLogo.png",
      imageAlt: "todoLogo",
      title: "To-Do List",
      info: "My Take on a HTML To-Do List with local storage."
    },
    {
      route: "/portfolio/calculator",
      imageType: "PortfolioImageTall",
      imageSrc: "/Images/calculatorLogo.png",
      imageAlt: "calculatorLogo",
      title: "Calculator",
      info: "My take on the classic Javascript Calculator exercise."
    },
    {
      route: "/portfolio/caesar",
      imageType: "PortfolioImage",
      imageSrc: "/Images/caesarLogo.png",
      imageAlt: "caesarLogo",
      title: "Caesar Enigma Machine",
      info: "ASCII loop exercise."
    },
    {
      route: "/portfolio/Etchasketch",
      imageType: "PortfolioImage",
      imageSrc: "/Images/easLogo.png",
      imageAlt: "easLogo",
      title: "Etch A Sketch",
      info: "JavaScript + CSS Flexbox exercise to build a responsive HTML Etch A Sketch."
    },
    {
      route: "/portfolio/googlehomepage",
      imageType: "PortfolioImage",
      imageSrc: "/Images/googlehomeLogo.png",
      imageAlt: "googlehomeLogo",
      title: "Mock Google Homepage",
      info: "My first project combineing HTML and CSS. Goal: Create a visual copy of the Dutch Google Homepage."
    },
    {
      route: "/portfolio",
      imageType: "PortfolioImage",
      imageSrc: "",
      imageAlt: "",
      title: "Stay Tuned",
      info: "I will continue to upload my work on this page."
    },
  ]

  return (
    <div className="Portfolio">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemParagraph paragraphText={paragraphText1} />
      <PortfolioItemParagraph paragraphText={paragraphText2} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
      <div className="PortfolioLinks">
        {
          PortfolioLinkData.map(({ route, imageType, imageSrc, imageAlt, title, info }, index) => 
          <Link to={route} key={index}>
          <div className="PortfolioItem">
            <img className={imageType} src={process.env.PUBLIC_URL + imageSrc} alt={imageAlt} />
            <div className="details">
              <span className="title">
                {title}
              </span>
              <br/>
              <span className="info">
                {info}
              </span>
            </div>
          </div>
          </Link>
          )
        }
      </div>
    </div>
  );
}

export default Portfolio;
