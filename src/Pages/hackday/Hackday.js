import React from 'react';
import './Hackday.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function Hackday() {
  const headerText = "Hackday";
  const paragraphs = [
    ["At </Salt>, they gave us a hackday challenge after our second day of learning React."],
    ["\"Build an app that has a React frontend, and a backend that makes a call to an external API. You have 1 day!\""],
    ["Feeling confident in Express. I thought of a project where most of the logic would take place in the frontend to learn as much react as possible along the way."],
    ["This is a best-of-3 Rock, Paper, Scissors game where you play against the computer. It allows you to lock in and change your picks with every round. If you manage to pull home the win. You will be rewarded by a random Dad-joke fetched from icanhazdadjoke.com via a locally hosted backend."],
    ["Looking back at this project I could have benefitted from hooks. I had no knowledge on these going in and worked the “old school” way by passing my states and props through all my modules."],
    ["Here below you can see a screenshot of the result and you can find the code on my Github", "https://github.com/MortenEmde/hackday", "Here"]
  ];
  const imageAlt = "HackdayImage"; 
  const imageFolderLocation = "/Images/hackdayLogo.png";
  return (
    <div className="Hackday">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageAlt={imageAlt} />
    </div>
  );
}

export default Hackday;
