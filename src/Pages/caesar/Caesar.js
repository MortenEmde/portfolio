import React from 'react';
import './Caesar.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemParagraph from '../../Components/portfolioItemParagraph/PortfolioItemParagraph';
import PortfolioItemImage from '../../Components/portfolioItemImage/PortfolioItemImage';

function Caesar() {
  const headerText = "Caesar Enigma Machine";
  const paragraphText1 = "Having learned about ASCII I made a basic .JS code to scramble code of letters by a specific key.";
  const paragraphText2 = "Example. \"ABC\" with a key of \"2\" becomes \"CDE\".";
  const paragraphText3 = "To challenge my understanding further I made this project to build a simple HTML dashboard around my \"Caesar code\".  The main challenge I faced here is that I only wanted to scramble the 26 English alphabetical letters thereby excluding iteration over all ASCII’s beside the lowercase (located from ASCII 97 to 172) and uppercase (from 65 to 90). I managed to make this work for any key rotating both positive and negative.";
  const paragraphText4 = "Regarding uppercase and lowercase. I have built the input field in the dashboard to be case sensitive and to ignore symbols and spaces.";
  const paragraphText5 = "If you click on the screenshot here below you can see the result and you can find the code on Github";
  const paragraphLink1 = "https://github.com/MortenEmde/Caesar";
  const paragraphLinkText1 = "Here"
  return (
    <div className="Caesar">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="CaesarContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemParagraph paragraphText={paragraphText2} />
        <PortfolioItemParagraph paragraphText={paragraphText3} />
        <PortfolioItemParagraph paragraphText={paragraphText4} />
        <PortfolioItemParagraph paragraphText={paragraphText5} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1}/>
        <PortfolioItemImage imageLink="https://mortenemde.github.io/Caesar/caesar.html" imageAlt="CaesarImage" imageFolderLocation="/Images/caesarLogo.png" />
      </div>
    </div>
  );
}

export default Caesar;
