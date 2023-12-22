import { useState } from "react";

export const useWordle = () => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");

  // each guess is an array
  const [guesses, setGuesses] = useState([]);

  // each guess is a string
  const [history, setHistory] = useState([]);
  const [isCorrect, setIscorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g [{key: a, color: yellow}]

  const formatGuess = () => {};

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state

  const addNewGuess = () => {};

  // handle keyup event and track current guess
  // if the user presses enter, add new guess

  const handleKeyUp = () => {};

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};
