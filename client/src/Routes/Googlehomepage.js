import React from 'react';
import '../Styles/Googlehomepage.css';
import googlehomeImage from '../Styles/Images/googlehomeLogo.png';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';

function Googlehomepage() {
  const headerText = "Mock Google Homepage";
  return (
    <div className="Googlehomepage">
      <PortfolioItemHeader headerText={headerText}/>
        <div className="GooglehomepageContent">
        <p>After I followed the basic HTML, CSS and Git curriculum at <a href="https://www.theodinproject.com"> The Odin Project</a>. I took this repo on as my very first project.</p>
        <p>The goal in short. Was to open Google.com in my browser and then make a local .HTML file and .CSS file reflects the view I saw in my browser.</p>
        <p>This was my first coding exercise that took full use of combining 2 different documents as well as pushing these to Github.</p>
        <p>Here below you can see a screenshot of the result and you can find the code on Github <a href="https://github.com/MortenEmde/google-homepage">Here</a>.</p>
        <img className="GooglehomepageImage" src={googlehomeImage} alt="GooglehomepageImage" />
      </div>
    </div>
  );
}

export default Googlehomepage;