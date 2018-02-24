import React, { Component } from 'react';
import ParallaxLandscapeLayer from './ParallaxLandscapeLayer.js';

import './ParallaxLandscape.css';

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
          <div style={LandscapeStyle}>

            <div className="buttonContainer">
              <button className="btnPrev" name="Prev" onClick={this.handleClickPrev}  > Prev </button>
              <button className="btnNext" name="Next" onClick={this.handleClickNext}  > Next </button>
            </div>

            <ParallaxLandscapeLayer
                width={this.props.width}      // width of image
                height={this.props.height}    // height of image
                scrollX={this.props.visibleX} // amount to move per stage (for foreground, every
                stage={this.state.stage}      // stage of animation
                layerName="grass"             // layer name
                backgroundRepeat="repeat-x"   // for css purposes setting "background-repeat" value
                img={}              // image url
                x={0}               // starting position x only numbers(pixels), will parse string into number
                y={0}               // starting position y can be in string = "10%"
                move={false}        // can be false, right, left
                loop={false}        // when the object moves outside the very end, should it appear again on the other side?
                speed="0"           // speed px per 50ms only for moving objects
                level={1}           // 1 = foreground, pixel amount to move on click is dependant on it
            />
          </div>

        </div>
    );
  }
}

export default ParallaxLandscape;
