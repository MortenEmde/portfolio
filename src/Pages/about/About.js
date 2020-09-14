import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';

const paragraphs = [
  ["Welcome to my always-under-construction webpage! I hope that you enjoy your time here."],
  ["My name, as it says in the corner, is Morten Emde Christensen and I’m a 30-year-old jack-of-all-trades. A little more than a decade ago, I started my career as an electrician, working on simple garden variety (or, as they say in Dutch, ‘huis-tuin-en-keuken’) jobs and far bigger projects such as Vestas’ wind turbines. My first taste of the world of programming was during my electrician’s degree, where I had to work with Intelligent House Control (IHC) to make programmable lighting, ventilation and alarm-systems. My interest was piqued and shelved for a later moment in my life."],
  ["Then, love threw a spanner in the (electrician’s) works!"],
  ["Eleven years ago, I met a Dutch girl who dragged me to Amsterdam, where I’ve been living ever since (with my now-fiancée and a semi-recent addition of two cats)."],
  ["Once I moved to Amsterdam, my career changed to one that was more customer service oriented, starting as a call centre representative with the airline company KLM, and quickly moving into something more of a Team leading and Mentoring role. I thoroughly enjoyed guiding teams through complex systems and situations, ensuring that the technical systems were understood and explained in a way that allowed the team to excel. However, there was no real hands-on experience with technical systems, the balance was definitely in favour of soft skills, such as guiding the team, rather than diving into a technical puzzle and trying to unravel it. The feeling that something was missing grew stronger with every passing month."],
  ["During this time, I looked back on all the jobs I’ve had and which parts of it I enjoyed. Time and time again, I ended up with this strong desire to be more technologically hands-on, and more than that. I want to know how systems work, how technological processes work, and how to make them easier. I want to be on the other side of the coin, or rather the other side of the programme. I want to be able to impact a user’s experience, and to make it as smooth, as enjoyable as possible."],
  ["This hunger for more technological action, combined with being a huge nerd and my passion for computers, made me decide to pursue a career in Software development. "],
  ["In October 2019, my contract with my previous employer came to an end and since then, I’ve been teaching myself how to programme through The Odin Project. Immediately, something clicked inside of me. I know this industry is where I belong. Programming speaks to me – I can easily hack away at something for 10 hours in a sitting and not notice the time has passed. To turn this into a career is an absolute dream come true."],
  ["In February, I completed a software development bootcamp with </Salt> and I’m currently working as a Full-stack JavaScript Developer with them. Apart from my \"9 to 5\" time, my spare time is filled videogames, good movies and with even more programming! Whether it’s learning new skills or honing my current ones, reading about experiences in programming or looking for new courses and languages to learn."],
  ["I’ve recently gotten into TypeScript and even though I initially was a bit skeptical about it, I’m actually having a lot of fun rewriting some of my old projects into Typescript projects. "]
];

function About() {
  return (
    <div className="About">
      <Sidebar />
      <div className="AboutContent">
        <h1 className="AboutHeader">
          Morten Emde Christensen
        </h1>
        {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <p>I hope that you enjoyed reading my profile and I encourage you to have a look at what I currently am up to via my <Link to="/portfolio">Portfolio page.</Link></p>
        <p>I would also advise you to have a look at my <Link to="/cv">CV</Link> If you are more curious about my professional experience.</p>
        </div>
    </div>
  );
}

export default About;
