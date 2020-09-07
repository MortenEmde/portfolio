import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Components/navbar/Navbar'
import ScrollToTop from '../Components/scrollToTop/ScrollToTop';
import AboutMe from '../Pages/about/About';
import CV from '../Pages/cv/CV';
import Portfolio from '../Pages/portfolio/Portfolio';
import Tictactoe from '../Pages/tictactoe/Tictactoe';
import Rest from '../Pages/rest/Rest';
import Centurylink from '../Pages/centurylink/Centurylink';
import Hackday from '../Pages/hackday/Hackday';
import ToDo from '../Pages/todo/ToDo';
import Calculator from '../Pages/calculator/Calculator';
import Caesar from '../Pages/caesar/Caesar';
import Etchasketch from '../Pages/etchasketch/Etchasketch';
import Googlehomepage from '../Pages/googlehomepage/Googlehomepage';
import HadesBoonTracker from '../Pages/hadesBoonTracker/HadesBoonTracker';
import TodoReactAndVue from '../Pages/todoReactAndVue/TodoReactAndVue';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Content">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/cv" component={CV} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/hadesboontracker" component={HadesBoonTracker} />
          <Route path="/portfolio/todoreactandvue" component={TodoReactAndVue} />
          <Route path="/portfolio/tictactoe" component={Tictactoe} />
          <Route path="/portfolio/rest" component={Rest} />
          <Route path="/portfolio/centurylink" component={Centurylink} />
          <Route path="/portfolio/hackday" component={Hackday} />
          <Route path="/portfolio/todo" component={ToDo} />
          <Route path="/portfolio/calculator" component={Calculator} />
          <Route path="/portfolio/caesar" component={Caesar} />
          <Route path="/portfolio/etchasketch" component={Etchasketch} />
          <Route path="/portfolio/googlehomepage" component={Googlehomepage} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
