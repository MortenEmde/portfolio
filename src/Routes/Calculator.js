import React from 'react';
import '../Styles/Calculator.css';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import PortfolioItemParagraph from '../Components/PortfolioItemParagraph';

function Calculator() {
  const headerText = "Calculator";
  const paragraphText1 = "A friend once told me \"You are not a programmer until you made a calculator\". I took this as a challenge and thereby made this calculator. As operators, It supports plus, minus, divide, multiply and percentage. Further, it supports comma (.), backspace, and all-clear (AC).";
  const paragraphText2 = "There were a lot of small challenges hidden here such as not allowing multiple commas or more that one operator without numbers between, not allowing division by 0 and making multi-display showing the most recent formula while below showing the result.";
  const paragraphText3 = "I made it to support chaining operations in place of one by one calculation. Currently, it can accept examples like 2 + 22 – 10 + 5 = 19 however it does not yet follow correct rules of math to operate on divide and multiply first. It still operates from left to right one by one.";
  const paragraphText4 = "If you click on the screenshot here below you can see the result and you can find the code on Github";
  const paragraphLink1 = "https://github.com/MortenEmde/Calculator";
  const paragraphLinkText1 = "Here"
  return (
    <div className="Calculator">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="CalculatorContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemParagraph paragraphText={paragraphText2} />
        <PortfolioItemParagraph paragraphText={paragraphText3} />
        <PortfolioItemParagraph paragraphText={paragraphText4} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
        <a href="https://mortenemde.github.io/Calculator/Calculator.html" target="_blank" rel="noopener noreferrer"><img className="CalculatorImage" src={process.env.PUBLIC_URL + '/Images/calculatorLogo.png'} alt="calculatorImage" /></a>
      </div>
    </div>
  );
}

export default Calculator;