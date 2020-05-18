import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../Styles/App.css';
import Navbar from '../Components/Navbar'
import AboutMe from './About';
import Portfolio from './Portfolio';
import CV from './CV';
import Centurylink from './Centurylink';
import Hackday from './Hackday';
import Salt from './Salt';
import Calculator from './Calculator';
import Caesar from './Caesar';
import Etchasketch from './Etchasketch';
import Googlehomepage from './Googlehomepage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="Content">
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/cv" component={CV} />
          <Route path="/centurylink" component={Centurylink} />
          <Route path="/hackday" component={Hackday} />
          <Route path="/salt" component={Salt} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/caesar" component={Caesar} />
          <Route path="/Etchasketch" component={Etchasketch} />
          <Route path="/googlehomepage" component={Googlehomepage} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;