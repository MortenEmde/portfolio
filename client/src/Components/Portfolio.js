import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Portfolio.css';
import centurylinkLogo from '../Styles/Images/centurylinkLogo.png';
import hackdayLogo from '../Styles/Images/hackdayLogo.png';
import saltLogo from '../Styles/Images/saltLogo.png';
import calculatorLogo from '../Styles/Images/calculatorLogo.png';
import caesarLogo from '../Styles/Images/caesarLogo.png';
import easLogo from '../Styles/Images/easLogo.png';
import googlehomeLogo from '../Styles/Images/googlehomeLogo.png';

function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Hello Portfolio!</h1>
      <p>This whole website!</p>
      <div className="PortfolioLinks">
        <div className="PortfolioItemRow">
          <Link to="/centurylink">
          <div className="PortfolioItem">
            <img className="PortfolioImageTall" src={centurylinkLogo} alt="Logo" />
          </div>
          </Link>
          <Link to="/hackday">
            <div className="PortfolioItem">
              <img className="PortfolioImage" src={hackdayLogo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="PortfolioItemRow">
          <Link to="/salt">
            <div className="PortfolioItem">
              <img className="PortfolioImage" src={saltLogo} alt="Logo" />
            </div>
          </Link>
          <Link to="/calculator">
            <div className="PortfolioItem">
              <img className="PortfolioImageTall" src={calculatorLogo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="PortfolioItemRow">
          <Link to="/caesar">
            <div className="PortfolioItem">
              <img className="PortfolioImage" src={caesarLogo} alt="Logo" />
            </div>
          </Link>
          <Link to="/Etchasketch">
            <div className="PortfolioItem">
              <img className="PortfolioImage" src={easLogo} alt="Logo" />
            </div>
          </Link>
        </div>
        <div className="PortfolioItemRow">
          <Link to="/googlehomepage">
            <div className="PortfolioItem">
              <img className="PortfolioImage" src={googlehomeLogo} alt="Logo" />
            </div>
          </Link>
          <div className="PortfolioItem">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
