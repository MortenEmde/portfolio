import React from 'react';
import '../Styles/Caesar.css';
import caesarImage from '../Styles/Images/caesarLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';

function Caesar() {
  const headerText = "Caesar Enigma Machine";

  return (
    <div className="Caesar">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="CaesarContent">
        <p>Having learned about ASCII I made a basic .JS code to scramble code of letters by a specific key.</p>
        <p><i>Example. "ABC" with a key of "2" becomes "CDE".</i></p>
        <p>To challenge my understanding further I made this project to build a simple HTML dashboard around my "Caesar code".  The main challenge I faced here is that I only wanted to scramble the 26 English alphabetical letters thereby excluding iteration over all ASCII’s beside the lowercase (located from ASCII 97 to 172) and uppercase (from 65 to 90). I managed to make this work for any key rotating both positive and negative.</p>
        <p>Regarding uppercase and lowercase. I have built the input field in the dashboard to be case sensitive and to ignore symbols and spaces.</p>
        <p>Here below you can see a screenshot of the result and you can find the code on Github <a href="https://github.com/MortenEmde/Caesar">Here</a>.</p>
        <img className="CaesarImage" src={caesarImage} alt="caesarImage" />
      </div>
    </div>
  );
}

export default Caesar;