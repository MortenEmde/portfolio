import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import PageHeader from '../../Components/pageHeader/PageHeader';
import PortfolioItemParagraph from '../../Components/portfolioItemParagraph/PortfolioItemParagraph';

function Portfolio() {
  const headerText = "Portfolio";
  const paragraphs = [
    ["This whole website has been put together by myself using ReactJS and is hosted on Netlify. It is thereby an interactive part of my portfolio for you to enjoy."],
    ["You can find the code for the full site on my Github", "https://github.com/MortenEmde/portfolio", "Here"],
    ["Here below you can find links to some of my other projects."]
  ];

  const portfolioLinkData = [
    {
      route: "/portfolio/hadesboontracker",
      imageType: "PortfolioImage",
      imageSrc: "/Images/hadesLogo.png",
      imageAlt: "hadesLogo",
      title: "Hades Boon Tracker",
      info: "Helping tool for the Roguelike Videogame Hades with a simple Express backend and frontend in ReactTS"
    },
    {
      route: "/portfolio/todoreactandvue",
      imageType: "PortfolioImage",
      imageSrc: "/Images/todoReactAndVueLogo.png",
      imageAlt: "todoReactAndVueLogo",
      title: "To-Do List in React + TS and Vue",
      info: "To-Do List exercise executed 2 additional ways. Using React + TypeScript and in VueJS"
    },
    {
      route: "/portfolio/tictactoe",
      imageType: "PortfolioImageTall",
      imageSrc: "/Images/tictactoeLogo.png",
      imageAlt: "tictactoeLogo",
      title: "Tic Tac Toe",
      info: "Tic Tac Toe build in vanilla JS with avatar selection."
    },
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
      info: "Salt examination MVP for Centurylink."
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
      <PageHeader headerText={headerText}/>
      {paragraphs.map((paragraph, index) => 
        <PortfolioItemParagraph key={index} paragraphText={paragraph[0]} paragraphLink={paragraph[1]} paragraphLinkText={paragraph[2]}/>
      )}
      <div className="PortfolioLinks">
        {
          portfolioLinkData.map(({ route, imageType, imageSrc, imageAlt, title, info }, index) => 
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
