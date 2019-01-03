import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import AboutMe from './components/pages/aboutMe';
import Telur from './components/pages/telur';
import DFMint from './components/pages/dfmint';
import PSF from './components/pages/psf';
import Portfolio from './components/pages/Portfolio';


import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route exact path='/AboutMe' component={AboutMe} />
      <Route exact path='/telur' component={Telur} />
      <Route exact path='/dfmint' component={DFMint} />
      <Route exact path='/psf' component={PSF} />
      <Route exact path='/portfolio' component={Portfolio} />

      </div>
      </Router>
    );
  }
}

export default App;
