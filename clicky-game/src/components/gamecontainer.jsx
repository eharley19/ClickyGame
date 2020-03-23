import React, { Component } from "react";
import Imagecard from "./imagecard";
class GameContainer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
        <Imagecard />
      </div>
    );
  }
}

export default GameContainer;
