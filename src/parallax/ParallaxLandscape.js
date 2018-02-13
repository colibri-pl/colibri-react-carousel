import React, { Component } from 'react';
import ParallaxLandscapeLayer from './ParallaxLandscapeLayer.js';

import './ParallaxLandscape.css';

import background from '../images/back-01.png';
import plane from '../images/airplane.png';
import front from '../images/front-all-02.png';

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
            width: this.props.width,
            height: this.props.height,
            position: 'relative',
        };


        return (
            <div className="ParallaxLandscape">

                <div className="buttonContainer">
                    <button className="btn" name="Prev" onClick={this.handleClickPrev}  > Prev </button>
                    <button className="btn" name="Next" onClick={this.handleClickNext}  > Next </button>
                </div>

                <div style={LandscapeStyle}>
                <ParallaxLandscapeLayer
                    width={this.props.width}      // layer visible state ( using for loops )
                    scrollX={this.props.visible}    // amount to move per stage
                    stage={this.state.stage}        // stage of animation
                    layer_name="background"         // layer name
                    img={front}     // image
                    x={0}           // starting position x only numbers(pixels), will parse string into number
                    y={0}           // starting position y can be in string = "10%"
                    move={false}    // can be false, right, left
                    loop={false}    // when the object moves outside the very end, should it appear again on the other side?
                    speed="0"       // speed px per 50ms
                    level={1}       // 1 = background?
                />

                <ParallaxLandscapeLayer
                    width={this.props.width}
                    scrollX={this.props.visible}
                    stage={this.state.stage}
                    layer_name="plane"
                    img={plane}
                    x={0}
                    y="10%"
                    move="right"
                    loop={true}
                    speed="10"
                    level={2}
                />

                <ParallaxLandscapeLayer
                    width={this.props.width}
                    scrollX={this.props.visible}
                    stage={this.state.stage}
                    layer_name="hill"
                    img={background}
                    x={0}
                    y={0}
                    move={false}
                    loop={true}
                    speed="0"
                    level={3}
                />
                </div>

            </div>
        );
    }
}

export default ParallaxLandscape;
