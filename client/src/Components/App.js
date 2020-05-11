import React from 'react';
import '../Styles/App.css';
import Home from './Home';
import AboutMe from './AboutMe';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;
