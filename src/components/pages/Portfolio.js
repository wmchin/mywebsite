import React, { Component } from 'react';
import Header from '../headerComponent/header';

class Portfolio extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="aboutMe">
          <h1 className="animated fadeInUp"> My Portfolio</h1>
      <div className="myCard">
      <div className="homeCards">
      <div class="row">
  <div class="col-sm-13">
            <div className="card-deck">
              <div className="card">
            <a href="/telur">
            <img className="card-img-top" src = {require('../../Assets/telur-bigrect.png')} alt="Card image cap" />
            </a>
                <div className="card-body">
                  <a className ="normalLink" href="/telur"><h5 className="card-title">Telur</h5></a>
                  <p className="card-text">Telur is my first full-on Design project, featuring all steps of a human-centered design process from needfinding and storyboarding to prototyping and launch!</p>
                  <p className="card-text"><small className="text-muted">Features: Design process, UX/UI Design</small></p>

                </div>
              </div>
              <div className="card">
              <a href="/dfmint">
                <img className="card-img-top" src={require('../../Assets/MintRect.png')} alt="Card image cap" />
                </a>
                <div className="card-body">
                <a className ="normalLink" href="/dfmint"><h5 className="card-title">Mint Community Redesign</h5></a>
                  <p className="card-text">As part of my first Design sprint, my team and I designed a community platform for Intuit's personal financing application, Mint.</p>
                  <p className="card-text"><small className="text-muted">Features: Design process, UX/UI Design</small></p>

                </div>
              </div>
              <div className="card">
              <a href="/psf">
                <img className="card-img-top" src={require('../../Assets/PSF/PSF1_thumb.png')} alt="Card image cap" />
              </a>
                <div className="card-body">
                  <a className ="normalLink" href="/dfmint">  <h5 className="card-title">Petrosains Science Festival</h5></a>
                  <p className="card-text">During my first Summer internship, I led a website development project for a client.</p>
                  <p className="card-text"><small className="text-muted">Features: Web Development</small></p>

                </div>
              </div>

</div></div>

<div class="row">
  <div class="col-sm-10">
            </div>

              <div className="card" style={{"width":"30.1%", "marginLeft":"15px", "marginTop":"1.5%"}}>
            <a href="/random">
            <img className="card-img-top" src = {require('../../Assets/telur-bigrect.png')} alt="Card image cap" />
            </a>
                <div className="card-body">
                  <a className ="normalLink" href="/random"><h5 className="card-title">Others: Logos/Graphics</h5></a>
                  <p className="card-text">Some of my random side works include creating logos for friends or graphics for personal interest.</p>
                  <p className="card-text"><small className="text-muted">Features: Graphic Design</small></p>

                </div>


</div></div>




            </div>

      </div>
    </div>
    </div>
</div>
    );
  }
}

export default Portfolio;
