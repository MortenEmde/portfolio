import React from 'react';
import './ToDo.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemParagraph from '../../Components/portfolioItemParagraph/PortfolioItemParagraph';
import PortfolioItemImage from '../../Components/portfolioItemImage/PortfolioItemImage';

function ToDo() {
  const headerText = "To-Do List"
  const paragraphText1 = "I present to you.. My take on the classic To-Do list!";
  const paragraphText2 = "You can add a task with comment using the text fields and mark a task complete simply by cliking on it. Once complete a task can be removed from the list by clicking the \"X\" on the right end of the list-item.";
  const paragraphText3 = "This was my first project useing local storage to keep the To-Do items on the list for following sessions unless removed.";
  const paragraphText4 = "If you click on the screenshot here below you can see the result and you can find the code on Github";
  const paragraphLink1 = "https://github.com/MortenEmde/todoList";
  const paragraphLinkText1 = "Here"

  return (
    <div className="ToDo">
      <PortfolioItemHeader headerText={headerText}/>
      <div className="ToDoContent">
        <PortfolioItemParagraph paragraphText={paragraphText1} />
        <PortfolioItemParagraph paragraphText={paragraphText2} />
        <PortfolioItemParagraph paragraphText={paragraphText3} />
        <PortfolioItemParagraph paragraphText={paragraphText4} paragraphLink={paragraphLink1} paragraphLinkText={paragraphLinkText1} />
        <PortfolioItemImage imageLink="https://mortenemde.github.io/todoList/index.html" imageAlt="ToDoImage" imageFolderLocation="/Images/todoLogo.png" />
      </div> 
    </div>
  );
}

export default ToDo;
