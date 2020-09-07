import React from 'react';
import './Tictactoe.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemParagraph from '../../Components/portfolioItemParagraph/PortfolioItemParagraph';
import PortfolioItemImage from '../../Components/portfolioItemImage/PortfolioItemImage';

function Tictactoe() {
  const headerText = "Tic Tac Toe";
  const paragraphText1 = "In this project I build a Tic Tac Toe game using vanilla JS, HTML and CSS.";
  const paragraphText2 = "I wanted to use factory functions to simplify creating, editing and passing on the players information in the game logic.";
  const paragraphText3 = "To take this to the next level I added name input fields as well as an avatar selection menu.";
  const paragraphText4 = "The game board is constructed dynamically in the JS logic and I use onClick events to manipulate the DOM making the game interaction feel dynamic.";
  const paragraphText5 = "My goal with the code itself was to have each function of the game logic separated with their own functions and scope to display my ability to modullize my code."
  const paragraphText6 = "If you click on the screenshot here below you can see the result and you can find the code on Github";
  const paragraphLink1 = "https://github.com/MortenEmde/tic-tac-toe";
  const paragraphLinkText1 = "Here";

  return (
    <div className="Tictactoe">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="TictactoeContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemParagraph paragraphText={paragraphText2} />
        <PortfolioItemParagraph paragraphText={paragraphText3} />
        <PortfolioItemParagraph paragraphText={paragraphText4} />
        <PortfolioItemParagraph paragraphText={paragraphText5} />
        <PortfolioItemParagraph paragraphText={paragraphText6} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
        <PortfolioItemImage imageLink="https://mortenemde.github.io/tic-tac-toe/ticTacToe.html" imageAlt="TictactoeImage" imageFolderLocation="/Images/tictactoeLogo.png" />
      </div>
    </div>
  );
}

export default Tictactoe;