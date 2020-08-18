import React from 'react';
import './About.scss'

const About = () => {
  return (
    <section className="about">
      <div className="about__img">
        <img src={process.env.PUBLIC_URL + '/images/shot.jpg'} alt="Shot"/> 
      </div>
      
      <div className="about__text">
        <h2>Who am I?</h2>
        <h1>I'AM A FRONT-END DEVELOPER</h1>
        <p>Hello, I'm a Front-end developer from Belarus(Minsk). Development is my hobby. I can create big projectss with HTML5, CSS3(SCSS/SASS), JavaScript, React.js and Node.JS. I like what I do. Are you interested?</p>
      </div>
    </section>
  );
};

export default About;