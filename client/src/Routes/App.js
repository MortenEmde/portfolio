import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../Styles/App.css';
import Navbar from '../Components/Navbar'
import AboutMe from './About';
import Portfolio from './Portfolio';
import CV from './CV';
import Centurylink from './Centurylink';
import Hackday from './Hackday';
import ToDo from './ToDo';
import Calculator from './Calculator';
import Caesar from './Caesar';
import Etchasketch from './Etchasketch';
import Googlehomepage from './Googlehomepage';
import ScrollToTop from '../Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Content">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/cv" component={CV} />
          <Route path="/portfolio/centurylink" component={Centurylink} />
          <Route path="/portfolio/hackday" component={Hackday} />
          <Route path="/portfolio/todo" component={ToDo} />
          <Route path="/portfolio/calculator" component={Calculator} />
          <Route path="/portfolio/caesar" component={Caesar} />
          <Route path="/portfolio/Etchasketch" component={Etchasketch} />
          <Route path="/portfolio/googlehomepage" component={Googlehomepage} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
