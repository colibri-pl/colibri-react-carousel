import React, { Component } from 'react';
import './App.css';
import ParallaxLandscape from "./parallax/ParallaxLandscape";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxLandscape
            width={5000}
            height={3000}      // height
            visibleX={1500}  // visible width px amount ( foreground moves visibleX px on click)
            visibleY={1000}

        />
      </div>
    );
  }
}

export default App;
