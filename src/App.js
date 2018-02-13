import React, { Component } from 'react';
import './App.css';
import ParallaxLandscape from "./parallax/ParallaxLandscape";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxLandscape
        width={3000}
        height={3000}
        visible={1000}  // visible width
        />
      </div>
    );
  }
}

export default App;
