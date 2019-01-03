import React, { Component } from 'react';
import Header from '../headerComponent/header';

class PSF extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1>Petrosains Science Festival</h1>
      <div className="myCard">
      <p>As part of my summer internship in Freshman year in 2017, I joined a small startup in Kuala Lumpur, Malaysia. During my time there, I worked on a project for a client (Petrosains), developing a responsive website for a Science Festival event. The website design and assets itself are provided by the client, and I was required to recreate it. I mainly used <b>Wordpress</b> to develop the website, as well as <b>HTML</b>, <b>CSS</b> and <b>Javascript</b> to add personalization to the many different plug-ins available on Wordpress. I also used a bit of <b>PHP</b> to link data from <b>mySQL</b> tables, storing details of the different event activities and schedules, to individual event pages on the website.</p>
      <p>
      A lot of the process was <b>self-learning</b> as I had not developed a website before, and there were times I was not sure whether I could achieve what was wanted. But eventually, I always did my best to find the closest solution possible and pushed myself to see what could be done. When I finished my internship, I was about 90% done with the website, as they wanted it. From there, the company and client took over my work and made finishing touches. Below are screenshots of the final product.
      </p>
      <h6>Landing Screen with Sticky Header Menu and Logo</h6>
      <img src = {require('../../Assets/PSF/PSF1.png')} width="100%" alt="" />
      <h6>Image Slider with Highlights</h6>
      <img src = {require('../../Assets/PSF/PSF2.png')} width="100%" alt="" />
      <img src = {require('../../Assets/PSF/PSF3.png')} width="100%" alt="" />
      <img src = {require('../../Assets/PSF/PSF4.png')} width="100%" alt="" />
      <img src = {require('../../Assets/PSF/PSF5.png')} width="100%" alt="" />
      <img src = {require('../../Assets/PSF/PSF6.png')} width="100%" alt="" />
      <img src = {require('../../Assets/PSF/PSF7.png')} width="100%" alt="" />
<br />
  <p>Unfortunately I could not get images of the individual event pages. The website gets updated annually as the event is rolled out annually, but <a href="http://www.sciencefestival.my">the website can be found here</a>. As of now the design has remained pretty similar, but it is very different and more graphical, interactive and attractive than how it looked in the previous years before I worked on it, so I'm proud to say I feel like I contributed quite a lot to its revamp.</p>
</div>
</div>
</div>

    );
  }
}

export default PSF;
