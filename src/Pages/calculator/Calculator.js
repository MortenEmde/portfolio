import React from 'react';
import './Calculator.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function Calculator() {
  const headerText = "Calculator";
  const paragraphs = [
    ["A friend once told me \"You are not a programmer until you made a calculator\". I took this as a challenge and thereby made this calculator. As operators, It supports plus, minus, divide, multiply and percentage. Further, it supports comma (.), backspace, and all-clear (AC)."],
    ["There were a lot of small challenges hidden here such as not allowing multiple commas or more that one operator without numbers between, not allowing division by 0 and making multi-display showing the most recent formula while below showing the result."],
    ["I made it to support chaining operations in place of one by one calculation. Currently, it can accept examples like 2 + 22 – 10 + 5 = 19 however it does not yet follow correct rules of math to operate on divide and multiply first. It still operates from left to right one by one."],
    ["If you click on the screenshot here below you can see the result and you can find the code on Github", "https://github.com/MortenEmde/Calculator", "Here"]
  ];
  const imageLink = "https://mortenemde.github.io/Calculator/Calculator.html";
  const imageAlt = "CalculatorImage";
  const imageFolderLocation = "/Images/calculatorLogo.png";
  return (
    <div className="Calculator">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageLink={imageLink} imageAlt={imageAlt} />
    </div>
  );
}

export default Calculator;
