import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Carousel from './components/carouselComponent/carousel';
import Homepage from './components/pages/homePage';
import AboutMe from './components/pages/aboutMe';
import Contact from './components/pages/contact';
import Telur from './components/pages/telur';
import Ucsd from './components/pages/ucsd';
import Telur2 from './components/pages/telur2';
import DFMint from './components/pages/dfmint';
import PSF from './components/pages/psf';
import Portfolio from './components/pages/Portfolio';
import Random from './components/pages/random';


import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route exact path='/AboutMe' component={AboutMe} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/telur' component={Telur} />
      <Route exact path='/ucsd' component={Ucsd} />
      <Route exact path='/telur2' component={Telur2} />
      <Route exact path='/dfmint' component={DFMint} />
      <Route exact path='/psf' component={PSF} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/random' component={Random} />

      </div>
      </Router>
    );
  }
}

export default App;
