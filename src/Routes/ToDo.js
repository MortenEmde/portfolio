import React from 'react';
import '../Styles/ToDo.css';
import PortfolioItemHeader from '../Components/PortfolioItemHeader';
import PortfolioItemParagraph from '../Components/PortfolioItemParagraph';

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
      <a href="https://mortenemde.github.io/todoList/index.html" target="_blank" rel="noopener noreferrer"><img className="ToDoImage" src={process.env.PUBLIC_URL + '/Images/todoLogo.png'} alt="ToDoImage" /></a>
      </div> 
    </div>
  );
}

export default ToDo;
