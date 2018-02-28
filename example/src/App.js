import React, { Component } from 'react';
import './App.css';
import ParallaxLandscape from "./parallax/ParallaxLandscape";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxLandscape
          width={5000}     // width of background images
          height={3000}    // height of background images
          visibleX={1500}  // visible width px amount ( foreground moves visibleX px on click)
          visibleY={1000}
          stages={3}       // number of stages to move
        />
      </div>
    );
  }
}

export default App;

