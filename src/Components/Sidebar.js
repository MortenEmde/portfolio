import React from 'react';
import '../Styles/Sidebar.css';
import logo from '../Styles/Images/logo512.png';

function Sidebar() {
  return (
    <aside className="Sidebar">
      <img className="HeadShot" src={logo} alt="Logo" />
      <h2 className="ContactHeader">CONTACT</h2>
      <ul className="ContactList">
        <li className="ContactItem">
          +31 (0)613993521
        </li>
        <li className="ContactItem">
          mortenemdec@gmail.com
        </li>
        <li className="ContactItem">
          George Gershwinlaan 519,<br/>Amsterdam,<br/>The Netherlands
        </li>
        <li className="ContactItem">
          <a href="https://github.com/MortenEmde">GitHub</a>
        </li>
        <li className="ContactItem">
          <a href="https://linkedin.com/in/morten-emde-christensen">LinkedIn</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;