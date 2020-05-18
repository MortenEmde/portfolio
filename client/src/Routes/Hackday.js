import React from 'react';
import '../Styles/Hackday.css';
import hackdayImage from '../Styles/Images/hackdayLogo.png';

function Hackday() {
  return (
    <div className="Hackday">
      <h1>Hello Hackday!</h1>
      <p>At &lt;/Salt&gt;, they gave us a hackday challenge after our second day of learning React.</p>
      <p><i>"Build an app that has a React frontend, and a backend that makes a call to an external API. You have 1 day!"</i></p>
      <p>Feeling confident in Express. I thought of a project where most of the logic would take place in the frontend to learn as much react as possible along the way.</p>
      <p>This is a best-of-3 Rock, Paper, Scissors game where you play against the computer. It allows you to lock in and change your picks with every round. If you manage to pull home the win. You will be rewarded by a random Dad-joke fetched from icanhazdadjoke.com via a locally hosted backend. </p>
      <p>Looking back at this project I could have benefitted from hooks. I had no knowledge on these going in and worked the “old school” way by passing my states and props through all my modules.</p>
      <p>Here below you can see a screenshot of the result and you can find the code on Github <a href="https://github.com/MortenEmde/hackday">Here</a>.</p>
      <img className="HackdayImage" src={hackdayImage} alt="hackdayImage" />
    </div>
  );
}

export default Hackday;