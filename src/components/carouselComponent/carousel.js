import React, { Component } from 'react';
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { height: 400, width: "100%" };

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false,
    };
  }
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };

  render() {
    let { leftIcon, rightIcon } = this.state;
    return (

      <ReactBootstrapCarousel
        animation={true}
        autoplay={this.state.autoplay}
        slideshowSpeed={2000}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onSelect={this.onSelect}
        ref={r => (this.slider = r)}
        version={4}
      >
        <div style={{ width: "100%"}}>
          {this.props.picFromParent1}
        </div>
        <div style={{ width: "100%" }}>
        {this.props.picFromParent2}
        </div>
        <div style={{width: "100%"}}>
        {this.props.picFromParent3}
        </div>

      </ReactBootstrapCarousel>

    );
  }
}

export default Carousel;
