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
  <p> My name is Wye, like the question, "Why?", which is pretty coincidental, considering a lot of what I do is ask "Why?". I'm curious about natural human behavior, how the mind works and how humans have grown and evolved into the current societal state we stand at today. Bad designs frustrate me while interesting and innovative designs excite me. I love working collaboratively and my breadth of interests (from research to graphic work to user testing and coding) and bubbly personality allow me to be a useful team player.
<br /><br />
  My interest in the human brain and problem-solving led me first to Computer Science, where I spent 2 years learning how machines imitate computation. After a while, I felt a lack of a certain <i><b>human flair</b></i>, which led me to give Design a try. Here I am today, as a Cognitive Science: Design & Interaction major and enjoying the work I'm doing, the valuable connections I'm making and the new skills I'm learning!
<br /><br />
In my free time, I like to read, exercise, explore new places, attempt to recreate good home-cooked Malaysian meals and paint.</p>
    </div>
    </div>
    </div>
</div>
    );
  }
}

export default AboutMe;
