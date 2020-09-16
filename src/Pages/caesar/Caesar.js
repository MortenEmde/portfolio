import React from 'react';
import './Caesar.css';
import PageHeader from '../../Components/pageHeader/PageHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function Caesar() {
  const headerText = "Caesar Enigma Machine";
  const paragraphs = [
    ["Having learned about ASCII I made a basic .JS code to scramble code of letters by a specific key."],
    ["Example. \"ABC\" with a key of \"2\" becomes \"CDE\"."],
    ["I made this project to build a simple HTML dashboard around my \"Caesar code\", To challenge my understanding of the ASCII-system further."],
    ["The main challenge I faced here is that I only wanted to scramble the 26 English alphabetical letters thereby excluding iteration over all ASCII’s beside the lowercase (located from ASCII 97 to 172) and uppercase (from 65 to 90). I managed to make this work for any key rotating both positive and negative."],
    ["Regarding uppercase and lowercase. I have built the input field in the dashboard to be case sensitive and to ignore symbols and spaces."],
    ["If you click on the screenshot here below you can see the result and you can find the code on Github", "https://github.com/MortenEmde/Caesar", "Here"]
  ];
  const imageLink = "https://mortenemde.github.io/Caesar/caesar.html";
  const imageAlt = "CaesarImage";
  const imageFolderLocation = "/Images/caesarLogo.png";
  return (
    <div className="Caesar">
      <PageHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageLink={imageLink} imageAlt={imageAlt} />
    </div>
  );
}

export default Caesar;
