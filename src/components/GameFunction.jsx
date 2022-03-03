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
    let computerChoice = game[Math.floor(Math.random() * game.length)];
    this.setState({ computer: computerChoice });
    let userChoice = this.state.user;
    let result = this.decideResult(userChoice, computerChoice);
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
