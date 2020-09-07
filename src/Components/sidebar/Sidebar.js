import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <aside className="Sidebar">
      <img className="HeadShot" src={process.env.PUBLIC_URL + '/Images/logo512.png'} alt="Logo" />
      <h2 className="ContactHeader">CONTACT</h2>
      <ul className="ContactList">
        <li className="ContactItem">
          <FontAwesomeIcon className="ContactIcon" icon={faPhone} />
          +31 (0)613993521
        </li>
        <li className="ContactItem">
          <FontAwesomeIcon className="ContactIcon" icon={faEnvelope} />
          mortenemdec@gmail.com
        </li>
        <li className="ContactItem">
          <FontAwesomeIcon className="ContactIcon" icon={faMapMarkerAlt} />
          George Gershwinlaan 519,<br/>Amsterdam,<br/>The Netherlands
        </li>
        <li className="ContactItem">
          <FontAwesomeIcon className="ContactIcon" icon={faGithub} />
          <a href="https://github.com/MortenEmde">GitHub</a>
        </li>
        <li className="ContactItem">
          <FontAwesomeIcon className="ContactIcon" icon={faLinkedin} />
          <a href="https://linkedin.com/in/morten-emde-christensen">LinkedIn</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;