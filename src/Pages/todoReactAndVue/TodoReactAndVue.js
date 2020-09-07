import React from 'react';
import './TodoReactAndVue.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function TodoReactAndVue() {
  const headerText = "To-Do List in React + TS and Vue";
  const paragraphs = [
    ["The ToDo List exercise has become one of my favourites when trying out new technology and frameworks."],
    ["On this page, I want to highlight 2 versions I especially enjoyed working with (To avoid flooding my portfolio with different versions of the same type of project)."],
    ["First I had a go at the VueJs framework.I took like a fish to water to this framework. As it clearly combines HTML, JS and CSS to create simple yet versatile SPA’s. Secondly, I had a go at TypeScript in combination with React.Via the link on the image in the bottom of this page, you can play around with the result and hopefully note 1 larger difference on this deployment."],
    ["Besides the fact that I used Netlify for the first time. I also reworked the serviceworker.js to set this up as a PWA (progressive web application). Meaning you can download it on your local machine as an app (using the button on the far right on your browsers search bar) and run it outside your browser."],
    ["If you click on the screenshot here below you can see the result of the React + TS app. And you can find the code on Github", "https://github.com/MortenEmde/todolist-react-ts", "Here"],
    ["On the right part of the screenshot you can see a preview of the Vue app and you can find the code on my Github", "https://github.com/MortenEmde/todolist-vue", "Here"]

  ];
  const imageFolderLocation = "/Images/todoReactAndVueLogo.png";
  const imageLink ="https://mortenstodolist.netlify.app/";
  const imageAlt = "todoReactAndVueImage";
  return (
    <div className="TodoReactAndVue">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageLink={imageLink} imageAlt={imageAlt} />
    </div>
  );
}

export default TodoReactAndVue;
