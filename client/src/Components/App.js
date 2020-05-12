import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import '../Styles/App.css';
import AboutMe from './About';
import Portfolio from './Portfolio';
import CV from './CV';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="NavContent">
          <ul className="NavBar">
            <li className="NavLink">
              <Link to="/">About Me</Link>
            </li>
            <li className="NavLink">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="NavLink">
              <Link to="/cv">CV</Link>
            </li>
          </ul>
        </nav>
        <div className="Content">
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/cv" component={CV} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
