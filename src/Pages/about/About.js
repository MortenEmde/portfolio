import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PageHeader from '../../Components/pageHeader/PageHeader';

function About() {
  return (
    <div className="About">
      <PageHeader headerText="Morten Christensen" />
      <div className="AboutWrapper">
        <div className="AboutContent">
          <p className="AboutGreeting">
            Hi, I'm Morten Emde Christensen!
          </p>
          <img className="AboutImage" src={process.env.PUBLIC_URL + '/Images/logo512.png'} alt="Logo" />
          <p className="AboutParagraph">
          Welcome to my always-under-construction webpage! I hope that you enjoy your time here.
          </p>
          <p className="AboutParagraph">
            You can check out what I currently am up to via my <Link to="/portfolio">Portfolio page.</Link>
          </p>
          <p className="AboutParagraph">
            I would also advise you to have a look at my <Link to="/biography">Biography</Link> and <Link to="/cv">CV</Link> If you are more curious about me and my professional experience.
          </p>
          <ul className="AboutContactList">
            <li className="AboutContactItem">
              <FontAwesomeIcon className="AboutContactIcon" icon={faPhone} />
              +31 (0)613993521
            </li>
            <li className="AboutContactItem">
              <FontAwesomeIcon className="AboutContactIcon" icon={faEnvelope} />
              mortenemdec@gmail.com
            </li>
            <li className="AboutContactItem">
              <FontAwesomeIcon className="AboutContactIcon" icon={faMapMarkerAlt} />
              George Gershwinlaan 519,<br/>Amsterdam,<br/>The Netherlands
            </li>
            <li className="AboutContactItem">
              <FontAwesomeIcon className="AboutContactIcon" icon={faGithub} />
              <a href="https://github.com/MortenEmde">GitHub</a>
            </li>
            <li className="AboutContactItem">
              <FontAwesomeIcon className="AboutContactIcon" icon={faLinkedin} />
              <a href="https://linkedin.com/in/morten-emde-christensen">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
