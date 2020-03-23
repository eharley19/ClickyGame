import React, { Component } from "react";
class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Clicky Game</h1>
          <p className="lead">
                Memory game created using React.js.
                Click any image below to get started.
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
