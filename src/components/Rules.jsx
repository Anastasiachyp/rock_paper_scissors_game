import React from "react";
import { Container, List } from "semantic-ui-react";

const Rules = () => {
  return (
    <>
    <Container id="rules">
      <h1 id="rules-header">Game Rules</h1>
              <p>The game is played between two players in which each player makes a hand signal representing an element of the game: stone, paper and scissors.
                  The result of the game is determined by 3 simple rules:</p>
    </Container>
    <List bulleted id="list">
    <List.Item>Rock wins against scissors</List.Item>
    <List.Item>Scissors win against paper</List.Item>
    <List.Item>Paper wins against rock</List.Item>
    </List>
    </>
  );
};

export default Rules;