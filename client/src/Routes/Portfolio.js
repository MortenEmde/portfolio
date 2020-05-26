import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Portfolio.css';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import centurylinkLogo from '../Styles/Images/centurylinkLogo.png';
import hackdayLogo from '../Styles/Images/hackdayLogo.png';
import todoLogo from '../Styles/Images/todoLogo.png';
import calculatorLogo from '../Styles/Images/calculatorLogo.png';
import caesarLogo from '../Styles/Images/caesarLogo.png';
import easLogo from '../Styles/Images/easLogo.png';
import googlehomeLogo from '../Styles/Images/googlehomeLogo.png';

function Portfolio() {
  const headerText = "Portfolio";
  return (
    <div className="Portfolio">
      <PortfolioItemHeader headerText={headerText}/>
      <p>This whole website!</p>
      <div className="PortfolioLinks">
        <Link to="/portfolio/centurylink">
        <div className="PortfolioItem">
          <img className="PortfolioImageTall" src={centurylinkLogo} alt="centurylinkLogo" />
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
            <img className="PortfolioImage" src={hackdayLogo} alt="hackdayLogo" />
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
            <img className="PortfolioImage" src={todoLogo} alt="todoLogo" />
            <div className="details">
              <span className="title">
              To-Do List;
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
            <img className="PortfolioImageTall" src={calculatorLogo} alt="calculatorLogo" />
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
            <img className="PortfolioImage" src={caesarLogo} alt="caesarLogo" />
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
            <img className="PortfolioImage" src={easLogo} alt="easLogo" />
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
            <img className="PortfolioImage" src={googlehomeLogo} alt="googlehomeLogo" />
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
