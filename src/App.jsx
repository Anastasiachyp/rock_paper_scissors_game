import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <h1>Rock, paper and scissors Game</h1>
        <div class='ui buttons'>
        <button id='rock' class='ui botton'>Rock</button>
        <button id='paper' class='ui botton'>Paper</button>
        <button id='scissors' class='ui botton'>Scissors</button>
        </div>
      </>
    )}
}

export default App;