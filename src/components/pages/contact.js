import React, { Component } from 'react';
import Header from '../headerComponent/header';

class Contact extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1>Contact</h1>
      <div className="myCard">
  <p> If you'd like to connect with me, feel free to shoot me an email at wmchin@ucsd.edu. </p>
    </div>
    </div>
</div>
    );
  }
}

export default Contact;
