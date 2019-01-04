import React, { Component } from 'react';
import Header from '../headerComponent/header';

class AboutMe extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1>About Me</h1>
      <div className="myCard">
      <div className="bg">
    <img src = {require('../../Assets/Portrait.jpg')} style={{"width":"20%" , "borderRadius":"50%"}} alt="" />
<br/>
  <p> My name is Wye Mun Chin, but I typically go by <b>Wye</b>. Like the question, "Why?", which is pretty coincidental, considering a lot of what I do is ask "Why?". I'm curious about natural human behavior, how the mind works and how humans have grown and evolved into the current societal state we stand at today.
<br /><br />
  My <b>interest in the human brain and problem-solving</b> led me first to <b>Computer Science</b>, where I spent 2 years learning how machines imitate computation and developing a strong coding skill foundation. After a while, I felt a lack of a certain <i><b>human flair</b></i>, which led me to give Design a try. Immediately I knew that I had found that intersection, <b>the sweet spot</b> between not only what I'm good at and what I like to do, but also with how I can help serve and impact others. Now as a <b>Cognitive Science: Design & Interaction</b> major at the University of California San Diego, I enjoy the work I'm doing, the valuable connections I'm making and the new skills I'm learning!
<br /><br />
In my free time, I like to read, exercise, explore new places, attempt to recreate good home-cooked Malaysian meals and paint. I also enjoy tutoring and learning new skills, proudly coding this website on my own using React.js, Gulp and SCSS.</p>
    </div>
    </div>
    </div>
</div>
    );
  }
}

export default AboutMe;
