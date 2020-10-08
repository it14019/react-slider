import React, { Component } from "react";
import '../styles/App.css'; 
import Slider from './Slider'; 

class App extends Component {
  render() {
    return (
      <div>
        <Slider totalSlides={5}/>
      </div>
    );
  }
}
export default App;
