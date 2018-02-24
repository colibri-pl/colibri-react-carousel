import React, { Component } from 'react';
import ParallaxLandscapeLayer from './ParallaxLandscapeLayer.js';

import './ParallaxLandscape.css';

import plane from '../images/airplane-flipped.png';
import front02 from '../images/front-all-02.png';
import front01 from '../images/front-all-01.png';
import street12 from '../images/12-street.png';
import grass13 from '../images/13-grass.png';
import back from '../images/back.png';
import clouds from '../images/clouds.png';
import fishingboat from '../images/fishing-boat.png';
import water from '../images/water.png';
import back02 from '../images/back-02.png';



class ParallaxLandscape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
    };
  }

  handleClickNext = () => {
    this.setState(this.state.stage >= 2 ? {stage:0}:{stage:this.state.stage+1})
  };
  handleClickPrev = () => {
    this.setState(this.state.stage <= 0 ? {stage:2}:{stage:this.state.stage-1})
  };

  render() {
    let LandscapeStyle = {
      width: this.props.visibleX,
      height: this.props.visibleY,
      position: 'relative',
      overflow: 'hidden',
    };


    return (
      <div className="ParallaxLandscape">

        <div className="buttonContainer">
          <button className="btn" name="Prev" onClick={this.handleClickPrev}  > Prev </button>
          <button className="btn" name="Next" onClick={this.handleClickNext}  > Next </button>
        </div>

        <div style={LandscapeStyle}>
          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}  // amount to move per stage
            stage={this.state.stage}    // stage of animation
            layer_name="grass"     // layer name
            backgroundRepeat="repeat-x" // for css purposes setting "background-repeat" value
            img={grass13}   // image
            x={0}       // starting position x only numbers(pixels), will parse string into number
            y={50}     // starting position y can be in string = "10%"
            move={false}  // can be false, right, left
            loop={false}  // when the object moves outside the very end, should it appear again on the other side?
            speed="0"     // speed px per 50ms only for moving objects
            level={1}     // 1 = foreground, pixel amount to move on click is dependant on it
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="street"
            backgroundRepeat="repeat-x"
            img={street12}
            x={0}
            y={-614}
            move="false"
            loop={false}
            speed="0"
            level={1.2}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="front1"
            backgroundRepeat="repeat-x"
            img={front01}
            x={0}
            y={0}
            move="false"
            loop={false}
            speed="0"
            level={1.4}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="front2"
            backgroundRepeat="repeat-x"
            img={front02}
            x={0}
            y={0}
            move="false"
            loop={false}
            speed="0"
            level={1.5}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="plane"
            backgroundRepeat="no-repeat"
            img={plane}
            x={this.props.visibleX-50}  // to start plane from visible state
            y="5%"
            move="left"
            loop={true}
            speed="1"
            level={2}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="boat"
            backgroundRepeat="no-repeat"
            img={fishingboat}
            x={0}
            y="30%"
            move="right"
            loop={true}
            speed="0.5"
            level={2.5}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="hill"
            backgroundRepeat="repeat-x"
            img={back}
            x={0}
            y={0}
            move={false}
            loop={false}
            speed="0"
            level={3}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="hill2"
            backgroundRepeat="repeat-x"
            img={back02}
            x={-1500}
            y={0}
            move={false}
            loop={false}
            speed="0"
            level={3}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="water"
            backgroundRepeat="repeat-x"
            img={water}
            x={0}
            y={0}
            move="false"
            loop={false}
            speed="0"
            level={3.5}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layer_name="clouds"
            backgroundRepeat="repeat-x"
            img={clouds}
            x={0}
            y={0}
            move="false"
            loop={false}
            speed="0"
            level={4}
          />

        </div>

      </div>
    );
  }
}

export default ParallaxLandscape;
