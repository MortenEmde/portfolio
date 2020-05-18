import React from 'react';
import '../Styles/About.css';
import Sidebar from '../Components/Sidebar';

function About() {
  return (
    <div className="About">
      <Sidebar />
      <div className="AboutContent">
        <h1 className="AboutHeader">
          Morten Emde Christensen
        </h1>
        <p>
          I am 29 years old and originate from a small town in Denmark called Korsør. I currently live in the Ntherlands, More specifically Amsterdam.
        </p>
        <p>
          Currently, I work as a FullStack JavaScript Developer employed at &lt;/Salt&gt; but you have the opportunity to take over my employment after a hiring period of 6-12 months. I would love to meet you for an interview and I hope you find my profile interesting!
        </p>
        <p>
          I spend my spare time with my dutch girlfriend and 2 maine coon cats. I enjoy playing videogames, bordgames, going to the cinema or a great consert.
          Last but not least, I enjoy learning new ways to improve my code. 
        </p>
      </div>
    </div>
  );
}

export default About;
