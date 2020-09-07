import React from 'react';
import './ToDo.css';
import PortfolioItemHeader from '../../Components/portfolioItemHeader/PortfolioItemHeader';
import PortfolioItemContent from '../../Components/portfolioItemContent/portfolioItemContent';

function ToDo() {
  const headerText = "To-Do List"
  const paragraphs = [
    ["I present to you.. My take on the classic To-Do list!"],
    ["You can add a task with comment using the text fields and mark a task complete simply by cliking on it. Once complete a task can be removed from the list by clicking the \"X\" on the right end of the list-item."],
    ["This was my first project useing local storage to keep the To-Do items on the list for following sessions unless removed."],
    ["If you click on the screenshot here below you can see the result and you can find the code on Github", "https://github.com/MortenEmde/todoList", "Here"]
  ]
  const imageFolderLocation = "/Images/todoLogo.png";
  const imageLink = "https://mortenemde.github.io/todoList/index.html";
  const imageAlt = "ToDoImage";
  return (
    <div className="ToDo">
      <PortfolioItemHeader headerText={headerText}/>
      <PortfolioItemContent paragraphs={paragraphs} imageFolderLocation={imageFolderLocation} imageLink={imageLink} imageAlt={imageAlt} />
    </div>
  );
}

export default ToDo;
