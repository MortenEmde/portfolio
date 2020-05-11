import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import '../Styles/App.css';
import Home from './Home';
import AboutMe from './About';
import Gallery from './Gallery';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="Content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
