import React from 'react';
import '../Styles/Calculator.css';
import calculatorImage from '../Styles/Images/calculatorLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';

function Calculator() {
  const headerText = "Calculator";
  return (
    <div className="Calculator">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="CalculatorContent">
        <p>A friend once told me "You are not a programmer until you made a calculator". I took this as a challenge and thereby made this calculator. As operators, It supports plus, minus, divide, multiply and percentage. Further, it supports comma (.), backspace, and all-clear (AC).</p>
        <p>There were a lot of small challenges hidden here such as not allowing multiple commas or more that one operator without numbers between, not allowing division by 0 and making multi-display showing the most recent formula while below showing the result.</p>
        <p>I made it to support chaining operations in place of one by one calculation. Currently, it can accept examples like 2 + 22 – 10 + 5 = 19 however it does not yet follow correct rules of math to operate on divide and multiply first. It still operates from left to right one by one.</p>
        <p>Here below you can see a screenshot of the result and you can find the code on Github <a href="https://github.com/MortenEmde/Calculator">Here</a>.</p>
        <img className="CalculatorImage" src={calculatorImage} alt="calculatorImage" />
      </div>
    </div>
  );
}

export default Calculator;