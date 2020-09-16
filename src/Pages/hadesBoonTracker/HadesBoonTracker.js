import React from 'react';
import './HadesBoonTracker.css';
import PageHeader from '../../Components/pageHeader/PageHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function HadesBoonTracker() {
  const headerText = "Hades Boon Tracker";
  const paragraphs = [
    ["Being a videogamer I wanted to put my programming skills to good use to get even more out of my downtime."],
    ["In the Roguelike videogame \"Hades\" you are faced with making choices between blessings/boons from the greek gods as you try to battle your way out of the underworld."],
    ["The challenge here is that the boons are split into tiers. And you won't be presented with a tier 2 boon unless you already have a specific tier 1 boon And this is where this app comes in! To keep track of what bonuses the boons of each god gives you and which one to pick next."],
    ["Having enjoyed working with TypeScript I made the clientside in ReactTS. It is fetching from a simple Express backend that I populated with static images and JSON files containing the data related to the boons and gods that I scraped from the internet. "],
    ["Here below you can see a screenshot of the result and you can find the code on my Github", "https://github.com/MortenEmde/hades-boon-tracker", "Here"],
    ["The app is currently not hosted but you can clone and launch it on your own machine following the README.md scripts."]
  ];
  const imageAlt = "hadesImage";
  const imageFolderLocation = "/Images/hadesLogo.png";
  return (
    <div className="HadesBoonTracker">
      <PageHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageAlt={imageAlt} />
    </div>
  );
}

export default HadesBoonTracker;
