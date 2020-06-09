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

  return (
    <div className="Portfolio">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemParagraph paragraphText={paragraphText1} />
      <PortfolioItemParagraph paragraphText={paragraphText2} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
      <div className="PortfolioLinks">
        <Link to="/portfolio/rest">
        <div className="PortfolioItem">
          <img className="PortfolioImageTall" src={process.env.PUBLIC_URL + '/Images/restLogo.png'} alt="restLogo" />
          <div className="details">
            <span className="title">
              REST Api
            </span>
            <br/>
            <span className="info">
              REST Api build using the Express framework.
            </span>
          </div>
        </div>
        </Link>
        <Link to="/portfolio/centurylink">
        <div className="PortfolioItem">
          <img className="PortfolioImageTall" src={process.env.PUBLIC_URL + '/Images/centurylinkLogo.png'} alt="centurylinkLogo" />
          <div className="details">
            <span className="title">
              Centurylink Sustainability app
            </span>
            <br/>
            <span className="info">
              &lt;/Salt&gt; examination MVP for Centurylink
            </span>
          </div>
        </div>
        </Link>
        <Link to="/portfolio/hackday">
          <div className="PortfolioItem">
            <img className="PortfolioImage" src={process.env.PUBLIC_URL + '/Images/hackdayLogo.png'} alt="hackdayLogo" />
            <div className="details">
              <span className="title">
                Hackday
              </span>
              <br/>
              <span className="info">
                1 day challenge to integrate frontend with backend extenal api call
              </span>
            </div>
          </div>
        </Link>
        <Link to="/portfolio/todo">
          <div className="PortfolioItem">
            <img className="PortfolioImage" src={process.env.PUBLIC_URL + '/Images/todoLogo.png'} alt="todoLogo" />
            <div className="details">
              <span className="title">
              To-Do List
              </span>
              <br/>
              <span className="info">
                My Take on a HTML To-Do List with local storage. 
              </span>
            </div>
          </div>
        </Link>
        <Link to="/portfolio/calculator">
          <div className="PortfolioItem">
            <img className="PortfolioImageTall" src={process.env.PUBLIC_URL + '/Images/calculatorLogo.png'} alt="calculatorLogo" />
            <div className="details">
              <span className="title">
                Calculator
              </span>
              <br/>
              <span className="info">
                My take on the classic Javascript Calculator exercise
              </span>
            </div>
          </div>
        </Link>
        <Link to="/portfolio/caesar">
          <div className="PortfolioItem">
            <img className="PortfolioImage" src={process.env.PUBLIC_URL + '/Images/caesarLogo.png'} alt="caesarLogo" />
            <div className="details">
              <span className="title">
                Caesar Enigma Machine
              </span>
              <br/>
              <span className="info">
                ASCII loop exercise
              </span>
            </div>
          </div>
        </Link>
        <Link to="/portfolio/Etchasketch">
          <div className="PortfolioItem">
            <img className="PortfolioImage" src={process.env.PUBLIC_URL + '/Images/easLogo.png'} alt="easLogo" />
            <div className="details">
              <span className="title">
                Etch A Sketch
              </span>
              <br/>
              <span className="info">
                JavaScript + CSS Flexbox exercise to build a responsive HTML Etch A Sketch
              </span>
            </div>
          </div>
        </Link>
        <Link to="/portfolio/googlehomepage">
          <div className="PortfolioItem">
            <img className="PortfolioImage" src={process.env.PUBLIC_URL + '/Images/googlehomeLogo.png'} alt="googlehomeLogo" />
            <div className="details">
              <span className="title">
                Mock Google Homepage
              </span>
              <br/>
              <span className="info">
                My first project combineing HTML and CSS to create a visual copy of the Dutch Google Homepage
              </span>
            </div>
          </div>
        </Link>
        <div className="PortfolioItem">
          <img className="PortfolioImage" alt=""/>
          <div className="details">
            <span className="title">
              Stay Tuned
            </span>
            <br/>
            <span className="info">
              I will continue to upload my work on this page
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
