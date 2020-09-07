import React from 'react';
import './Tictactoe.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function Tictactoe() {
  const headerText = "Tic Tac Toe";
  const paragraphs = [
    ["In this project I build a Tic Tac Toe game using vanilla JS, HTML and CSS."], 
    ["I wanted to use factory functions to simplify creating, editing and passing on the players information in the game logic."],
    ["To take this to the next level I added name input fields as well as an avatar selection menu."],
    ["The game board is constructed dynamically in the JS logic and I use onClick events to manipulate the DOM making the game interaction feel dynamic."],
    ["My goal with the code itself was to have each function of the game logic separated with their own functions and scope to display my ability to modullize my code."],
    ["If you click on the screenshot here below you can see the result and you can find the code on Github", "https://github.com/MortenEmde/tic-tac-toe", "Here"]
  ];
  const imageFolderLocation = "/Images/tictactoeLogo.png";
  const imageLink = "https://mortenemde.github.io/tic-tac-toe/ticTacToe.html";
  const imageAlt = "TictactoeImage" ;
  return (
    <div className="Tictactoe">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageLink={imageLink} imageAlt={imageAlt} />
    </div>
  );
}

export default Tictactoe;
