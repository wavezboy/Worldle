import { useState } from "react";

interface keyProps {
  key: string;
  isTrusted: boolean;
}

interface guesses {
  key: string;
  color: string;
}

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [guesses, setGuesses] = useState<guesses[]>([]); //each guess is an array
  const [history, setHistory] = useState<string[]>([]); //each guess is a string
  const [isCorrect, setIscorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g [{key: a, color: yellow}]

  const formatGuess = () => {
    const solutionArray = [...solution];
    const formartedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    formartedGuess.forEach((l, i) => {
      if (solutionArray[i] == l.key) {
        formartedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    formartedGuess.forEach((l, i) => {
      if (
        solutionArray[i] == null &&
        solutionArray[i].includes(l.key) &&
        l.key !== "green"
      ) {
        formartedGuess[i].color = "yelow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    console.log(solutionArray);

    setHistory([...history, currentGuess]);
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state

  const addNewGuess = () => {};

  // handle keyup event and track current guess
  // if the user presses enter, add new guess

  const handleKeyup = ({ key }: keyProps) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("you have exhausted your turn");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("you already tried that word");
        return;
      }

      if (currentGuess.length != 5) {
        console.log("words must be five chars long");
        return;
      }

      formatGuess();
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};

export default useWordle;
