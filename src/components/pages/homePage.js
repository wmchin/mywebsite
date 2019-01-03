import React, { Component } from 'react';
import Header from '../headerComponent/header';
import {
  Link
} from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div className="home">
      <div className="container-fluid">
      <img className="myImg" src = {require('../../Assets/Portrait.jpg')} style={{"marginTop":"11%","marginRight":"31%","borderRadius":"50%", "width":"8%", "transform":"scale(1.3,1.3)"}} alt="" />
      <h1>Hi there. I'm <div className="wye"> Wye</div>. <br/>
      What brings you here today?</h1>
      </div>
      <nav>
      <div className="animated fadeIn container-fluid">
      <Link to='/'>Home</Link>
      <Link to='/AboutMe'>About Me</Link>
      <a href="https://drive.google.com/file/d/1PkXYRCuxPrqiYaJ-7WhPDpXx5LYLK08r/view?usp=sharing" target="_blank">Resume</a>
      <Link to='/Portfolio'>Portfolio</Link>
      <Link to='/Contact'>Contact</Link>
      </div>
      </nav>
<div className="homeCards">
      <div className="card-deck">
        <div className="card">
      <a href="/telur">
      <img className="card-img-top" src = {require('../../Assets/telur-bigrect.png')} alt="Card image cap" />
      </a>
          <div className="card-body">
            <a className ="normalLink" href="/telur"><h5 className="card-title">Telur</h5></a>
            <p className="card-text">Telur is my first full-on Design project, featuring all steps of a human-centered design process from needfinding and storyboarding to prototyping and launch!</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
        <a href="/dfmint">
          <img className="card-img-top" src={require('../../Assets/MintRect.png')} alt="Card image cap" />
          </a>
          <div className="card-body">
          <a className ="normalLink" href="/dfmint"><h5 className="card-title">Mint Community Redesign</h5></a>
            <p className="card-text">As part of my first Design sprint, my team and I designed a community platform for Intuit's personal financing application, Mint.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
        <a href="/psf">
          <img className="card-img-top" src={require('../../Assets/PSF/PSF1.png')} alt="Card image cap" />
        </a>
          <div className="card-body">
            <a className ="normalLink" href="/dfmint">  <h5 className="card-title">Petrosains Science Festival</h5></a>
            <p className="card-text">During my first Summer internship, I led a website development project for a client.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

</div>
      </div>
    );
  }
}

export default Homepage;