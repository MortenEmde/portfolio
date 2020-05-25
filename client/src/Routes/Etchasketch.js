import React from 'react';
import '../Styles/Etchasketch.css';
import easImage from '../Styles/Images/easLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';

function Etchasketch() {
  const headerText = "Etch A Sketch";
  return (
    <div className="Etchasketch">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="EtchasketchContent">
        <p>After studying JS and learning about DOM manipulation to achieve dynamic rendering of HTML elements I made my Etch A Sketch.</p>
        <p>The challenge of this project also came in the form of correctly displaying HTML elements that are not default rendered on the page. My CSS weapon of choice here was Flexbox as it was a logic I could easily follow and translate into a dynamic Row + Column set-up.</p>
        <p>The Etch_A_Sketch is a black background grid where each of the cells turns white when you move your mouse over. I added an option to change the grid size all the way from 1x1 cell up to 100x100 cells while staying within the predefined space. (By default, the program loads with 16x16 cells). There is also an available Reset button in case you want to start over your drawing.</p>
        <p>Here below you can see a screenshot of the result and you can find the code on Github <a href="https://github.com/MortenEmde/Etch_A_Sketch">Here</a>.</p>
        <img className="EtchasketchImage" src={easImage} alt="EtchasketchImage" />
      </div>
    </div>
  );
}

export default Etchasketch;