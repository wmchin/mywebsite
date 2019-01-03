import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
      <header>

      <nav className="navbar-expand-lg d-flex justify-content-end">
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/AboutMe">About Me</Link>
      </li>
      <li>
      <a href="https://drive.google.com/file/d/1PkXYRCuxPrqiYaJ-7WhPDpXx5LYLK08r/view?usp=sharing" target="_blank">Resume</a>
      </li>
      <li>
      <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li>
      <Link to="/Contact">Contact</Link>
      </li>
      </ul>
      </nav>


      </header>
      </div>
    );
  }
}

export default Header;
