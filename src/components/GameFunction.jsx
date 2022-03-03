import React, { Component } from "react";

const game = ["rock", "paper", "scissors"];

class GameFunction extends Component {
  state = {
    user: "",
    computer: "",
  };
  determineResult = (user, computer) => {
    if (user === computer) {
      return "Its a tie!";
    } else if (
      (user === "Scissor" && computer === "Paper") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Rock" && computer === "Scissor")
    ) {
      return "You win!";
    } else {
      return "Computer win!";
    }
  };

  playGame = () => {
    let computerChoise = game[Math.floor(Math.random() * game.length)];
    this.setState({ computer: computerChoise });
    let userChoise = this.state.user;
    let result = this.decideResult(userChoise, computerChoise);
    if (result !== "Tie") {
      this.setScore(result);
    } else {
      this.setState({ result: result });
    }
  };

  render() {
    const { user, computer } = this.state;
    return <div></div>;
  }
}
export default GameFunction;
