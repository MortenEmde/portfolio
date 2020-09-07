import React from 'react';
import './Etchasketch.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemParagraph from '../../Components/portfolioItemParagraph/PortfolioItemParagraph';
import PortfolioItemImage from '../../Components/portfolioItemImage/PortfolioItemImage';

function Etchasketch() {
  const headerText = "Etch A Sketch";
  const paragraphText1 = "After studying JS and learning about DOM manipulation to achieve dynamic rendering of HTML elements I made my Etch A Sketch.";
  const paragraphText2 = "The challenge of this project also came in the form of correctly displaying HTML elements that are not default rendered on the page. My CSS weapon of choice here was Flexbox as it was a logic I could easily follow and translate into a dynamic Row + Column set-up.";
  const paragraphText3 = "The Etch_A_Sketch is a black background grid where each of the cells turns white when you move your mouse over. I added an option to change the grid size all the way from 1x1 cell up to 100x100 cells while staying within the predefined space. (By default, the program loads with 16x16 cells). There is also an available Reset button in case you want to start over your drawing.";
  const paragraphText4 = "If you click on the screenshot here below you can see the result and you can find the code on Github";
  const paragraphLink1 = "https://github.com/MortenEmde/Caesar";
  const paragraphLinkText1 = "Here";
  return (
    <div className="Etchasketch">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="EtchasketchContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemParagraph paragraphText={paragraphText2} />
        <PortfolioItemParagraph paragraphText={paragraphText3} />
        <PortfolioItemParagraph paragraphText={paragraphText4} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
        <PortfolioItemImage imageLink="https://mortenemde.github.io/Etch_A_Sketch/etch_a_sketch.html" imageAlt="EtchasketchImage" imageFolderLocation="/Images/easLogo.png" />
      </div>
    </div>
  );
}

export default Etchasketch;