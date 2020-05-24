import React from 'react';
import '../Styles/Hackday.css';
import hackdayImage from '../Styles/Images/hackdayLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import PortfolioItemParagraphEven from '../Components/PortfolioItemParagraphEven';
import PortfolioItemParagraphUneven from '../Components/PortfolioItemParagraphUneven';

function Hackday() {
  const headerText = "Hackday";
  const paragraphText1 = "At </Salt>, they gave us a hackday challenge after our second day of learning React.";
  const paragraphText2 = "\"Build an app that has a React frontend, and a backend that makes a call to an external API. You have 1 day!\"";
  const paragraphText3 = "Feeling confident in Express. I thought of a project where most of the logic would take place in the frontend to learn as much react as possible along the way.";
  const paragraphText4 = "This is a best-of-3 Rock, Paper, Scissors game where you play against the computer. It allows you to lock in and change your picks with every round. If you manage to pull home the win. You will be rewarded by a random Dad-joke fetched from icanhazdadjoke.com via a locally hosted backend.";
  const paragraphText5 = "Looking back at this project I could have benefitted from hooks. I had no knowledge on these going in and worked the “old school” way by passing my states and props through all my modules.";
  const paragraphText6 = "Here below you can see a screenshot of the result and you can find the code on my Github";
  const paragraphLink1 = "https://github.com/MortenEmde/hackday";
  const paragraphLinkText1 = "Here"
  const paragraphImage1 = hackdayImage

  return (
    <div className="Hackday">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="HackdayContent">
        <PortfolioItemParagraphUneven paragraphText={paragraphText1} />
        <PortfolioItemParagraphEven paragraphText={paragraphText2} />
        <PortfolioItemParagraphUneven paragraphText={paragraphText3} />
        <PortfolioItemParagraphEven paragraphText={paragraphText4} />
        <PortfolioItemParagraphUneven paragraphText={paragraphText5} paragraphImage={paragraphImage1}/>
        <PortfolioItemParagraphEven paragraphText={paragraphText6} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
      </div>
    </div>
  );
}

export default Hackday;