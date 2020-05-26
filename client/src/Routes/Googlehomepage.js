import React from 'react';
import '../Styles/Googlehomepage.css';
import googlehomeImage from '../Styles/Images/googlehomeLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import PortfolioItemParagraph from '../Components/PortfolioItemParagraph';

function Googlehomepage() {
  const headerText = "Mock Google Homepage";
  const paragraphText1 = "After I followed a basic HTML, CSS and Git curriculum. I took this repo on as my very first project.";
  const paragraphText2 = "The goal in short. Was to open Google.com in my browser and then make a local .HTML file and .CSS file reflects the view I saw in my browser.";
  const paragraphText3 = "This was my first coding exercise that took full use of combining 2 different documents as well as pushing these to Github.";
  const paragraphText4 = "If you click on the screenshot here below you can see the result and you can find the code on Github";
  const paragraphLink1 = "https://github.com/MortenEmde/google-homepage";
  const paragraphLinkText1 = "Here"

  return (
    <div className="Googlehomepage">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="GooglehomepageContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemParagraph paragraphText={paragraphText2} />
        <PortfolioItemParagraph paragraphText={paragraphText3} />
        <PortfolioItemParagraph paragraphText={paragraphText4} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1} />
        <a href="https://mortenemde.github.io/google-homepage/" target="_blank" rel="noopener noreferrer"><img className="GooglehomepageImage" src={googlehomeImage} alt="GooglehomepageImage" /></a>
      </div>
    </div>
  );
}

export default Googlehomepage;