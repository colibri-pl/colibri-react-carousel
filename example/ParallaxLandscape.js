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
    this.setState(this.state.stage >= this.props.stages-1 ? {stage:0}:{stage:this.state.stage+1})
  };
  handleClickPrev = () => {
    this.setState(this.state.stage <= 0 ? {stage:this.props.stages-1}:{stage:this.state.stage-1})
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
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layerName="grass"
            backgroundRepeat="repeat-x"
            img={grass13}
            x={0}
            y={50}
            move={false}
            loop={false}
            speed="0"
            level={1}
          />

          <ParallaxLandscapeLayer
            width={this.props.width}
            height={this.props.height}
            scrollX={this.props.visibleX}
            stage={this.state.stage}
            layerName="street"
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
            layerName="front1"
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
            layerName="front2"
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
            layerName="plane"
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
            layerName="boat"
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
            layerName="hill"
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
            layerName="hill2"
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
            layerName="water"
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
            layerName="clouds"
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
