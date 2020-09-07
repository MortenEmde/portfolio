import React from 'react';
import './About.css';
import Sidebar from '../../Components/sidebar/Sidebar';

function About() {
  return (
    <div className="About">
      <Sidebar />
      <div className="AboutContent">
        <h1 className="AboutHeader">
          Morten Emde Christensen
        </h1>
        <p>
          I’m 30 years old and I grew up in a small town in Denmark called Korsør where I worked as an electrician for several years. However, over 10 years ago, I found love and moved to The Netherlands, where I’m living with my amazing fiancée and our two sweet cats.
        </p>
        <p>
          In Amsterdam, I quickly found a career in Team-leading and Mentoring. Even-though I loved guiding my team through complex systems, questions and situations I felt there was something missing.
        </p>
        <p>
          I knew I have always had a knack for technical problem solving and I really enjoy when I can actually make a process easier and more enjoyable for everyone involved. During my career as a team leader, unfortunately I was not able to utilise my technical skills. 
        </p>
        <p>
          My hunger for more technological action during my work, combined with my passion for computers, made me decide to make a full switch to Software development. <br/> The thought of writing code to make your day to day life easier is the main driver for me. I enjoy seeing people being the best version of themselves. And I see Software development play a constantly increasing role in this.
        </p>
        <p>
          In my spare time, I enjoy playing videogames, boardgames, going to the cinema or a great concert. And last but not least, I enjoy learning new ways to improve my code. 
        </p>
        <p>
          Currently, I work as a FullStack JavaScript Developer employed at &lt;/Salt&gt; but you have the opportunity to take over my employment after a consultant hiring period of 6-12 months. I would love to meet you for an interview and I hope you find my profile interesting!
        </p>
      </div>
    </div>
  );
}

export default About;
