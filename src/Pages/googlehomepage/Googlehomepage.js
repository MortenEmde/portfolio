import React from 'react';
import './Googlehomepage.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function Googlehomepage() {
  const headerText = "Mock Google Homepage";
  const paragraphs = [
    ["After I followed a basic HTML, CSS and Git curriculum. I took this repo on as my very first project."],
    ["The goal in short. Was to open Google.com in my browser and then make a local .HTML file and .CSS file reflects the view I saw in my browser."],
    ["This was my first coding exercise that took full use of combining 2 different documents as well as pushing these to Github."],
    ["If you click on the screenshot here below you can see the result and you can find the code on Github", "https://github.com/MortenEmde/google-homepage", "Here"]
  ];
  const imageLink = "https://mortenemde.github.io/google-homepage/";
  const imageAlt = "GooglehomepageImage";
  const imageFolderLocation = "/Images/googlehomeLogo.png";
  return (
    <div className="Googlehomepage">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageLink={imageLink} imageAlt={imageAlt} />
    </div>
  );
}

export default Googlehomepage;
