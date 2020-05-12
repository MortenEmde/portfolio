import React from 'react';
import '../Styles/CV.css';
import logo from '../Styles/Images/logo512.png';

function CV() {
  return (
    <div className="CV">
      <aside className="CVSidebar">
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
      <div className="CVContent">
        <h2 className="SubHeader">EDUCATION AND TRAINING</h2>
        <div className="Job">
          <h4 className="JobTitle">
            FULL STACK JAVASCRIPT
          </h4>
          <h5 className="JobDuration">
            School of Applied Technology &lt;/Salt&gt; / Amsterdam / January 2020 - April 2020 
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Highly paced and very intense training program. Turning hobby coders into productive full stack developers.
            </li>
          </ul>
        </div>
        <h2 className="SubHeader">WORK EXPERIENCE</h2>
        <div className="Job">
          <h4 className="JobTitle">
            TEAM LEAD CUSTOMER SERVICE AND SALES
          </h4>
          <h5 className="JobDuration">
            Rituals Cosmetics / Amsterdam / March 2019 – September 2019
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Build, coach and lead a team of 30 junior and senior agents for a brand-new customer service and sales department.
            </li>
            <li className="JobTask">
              Highly involved in the recruitment and hiring process of new agents.
            </li>
            <li className="JobTask">
              Participate in the selection process of acquiring new workforce management systems.
            </li>
            <li className="JobTask">
              Provide service to customers in 7 languages via Social Media, phone and e-mail.
            </li>
          </ul>
        </div>
        <div className="Job">
          <h4 className="JobTitle">
            RAW MATERIAL AND CUSTOM PROCESS SUPERVISOR CENTRAL REGION/DACH
          </h4>
          <h5 className="JobDuration">
            Merck Chemicals B.V. / Amsterdam / February 2018 – February 2019
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Establish a new Sales Support team to support key customers in the DACH and Central region. This typically involves planning daily operations, meeting departmental KPI’s, managing escalations and providing training workshops for (new) staff.
            </li>
            <li className="JobTask">
              Design soft skill and system trainings suited to the departmental needs.
            </li>
            <li className="JobTask">
              Involved in switching the department over from an internal CRM system to Salesforce. This typically involves training (new) staff and being heavily involved with the day-to-day finetuning of the system.
            </li>
          </ul>
        </div>
        <div className="Job">
          <h4 className="JobTitle">
            APPLIED SALES SUPPORT SUPERVISOR BENELUX AND NORDIC
          </h4>
          <h5 className="JobDuration">
            Merck Chemicals B.V. / Amsterdam / January 2018 – February 2018
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Manage and coach a team of Senior and Junior Sales Support agents of Merck Chemicals mainly focused on Benelux and Nordic markets.
            </li>
            <li className="JobTask">
              In charge of planning the daily operation with eye on servicing customers and to meet departmental KPI’s. As well as managing any escalations for the pre-mentioned markets.
            </li>
          </ul>
        </div>
        <div className="Job">
          <h4 className="JobTitle">
            APPLIED SALES SUPPORT SPECIALIST NORDIC
          </h4>
          <h5 className="JobDuration">
            Merck Chemicals B.V. / Amsterdam / July 2017 – January 2018
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Support customers of Merck Chemicals with pre- and post-sales of specialized products and bulk requests.
            </li>
            <li className="JobTask">
              Assigned main focus on key customers and GSA accounts from the Nordic region while supporting other market areas such as Benelux and DACH.
            </li>
          </ul>
        </div>
        <div className="Job">
          <h4 className="JobTitle">
            TEAM LEAD BUSINESS TO CONSUMER
          </h4>
          <h5 className="JobDuration">
            Cygnific / Amsterdam / March 2015 – July 2017
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Lead, support and coach a team of Junior and Senior Customer service and sales representatives for KLM Royal Dutch Airlines, Air France and Delta Airlines, in close everyday cooperation with other teams and Team leads.
            </li>
            <li className="JobTask">
              Analyze and forecast performance to react and adjust daily strategies based on operational needs.
            </li>
            <li className="JobTask">
              Involved in the recruitment and hiring process of new agents.
            </li>
          </ul>
        </div>
        <div className="Job">
          <h4 className="JobTitle">
            AD INTERIM MENTOR
          </h4>
          <h5 className="JobDuration">
            Cygnific / Amsterdam / May 2014 – March 2015
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Coach and provide technical support to a team of Junior and Senior Agents, in cooperation with supervisors and management.
            </li>
            <li className="JobTask">
              In charge of performing structured quality checks.
            </li>
          </ul>
        </div>
        <div className="Job">
          <h4 className="JobTitle">
            CUSTOMER SERVICE AND SALES REPRESENTATIVE
          </h4>
          <h5 className="JobDuration">
            Cygnific / Amsterdam / March 2011 – May 2014
          </h5>
          <ul className="JobDescription">
            <li className="JobTask">
              Phone and email support, sales and service for KLM Royal Dutch Airlines
            </li>
          </ul>
        </div>
        <div className="Job">
        <h4 className="JobTitle">
          ELECTRICIAN
        </h4>
        <h5 className="JobDuration">
          Various companies / Denmark /August 2006 – March 2011
        </h5>
        <ul className="JobDescription">
          <li className="JobTask">
            Private, office and industrial electrical installations
          </li>
        </ul>
        <h2 className="SubHeader">TECHNOLOGIES</h2>
        <h2 className="SubHeader">CERTIFICATES</h2>
          <ul className="CertificateList">
            <li className="Certificate">
              &lt;/Salt&gt; Fullstack JavaScript Bootcamp - 2020
            </li>
            <li className="Certificate">
              BHV office saftety - 2019
            </li>
            <li className="Certificate">
              Gert van Grunsven Management workshop - 2018
            </li>
            <li className="Certificate">
              Lean Six Sigma Lean Belt training - 2015
            </li>
            <li className="Certificate">
              Pieterman Sales attitude workshop - 2015
            </li>
            <li className="Certificate">
              Earlybridge Coach workshop - 2015
            </li>
            <li className="Certificate">
              Amadeus Oscar Software - 2014
            </li>
            <li className="Certificate">
              Lean Six Sigma - 2011
            </li>
            <li className="Certificate">
              Amadeus Altea Software - 2012
            </li>
            <li className="Certificate">
              Amadeus Alcyon Software - 2011
            </li>
          </ul>
        <h2 className="SubHeader">SPOKEN LANGUAGES</h2>
          <ul className="LanguageList">
            <li className="Language">
              Danish – Native
            </li>
            <li className="Language">
              English – Fluent
            </li>
            <li className="Language">
              Dutch – Proficient
            </li>
          </ul>
      </div>
      </div>
    </div>
  );
}

export default CV;

{/* <div className="Job">
<h4 className="JobTitle"></h4>
<h5 className="JobDuration"></h5>
<ul className="JobDescription">
  <li className="JobTask"></li>
  <li className="JobTask"></li>
  <li className="JobTask"></li>
</ul>
</div> */}