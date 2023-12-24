import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

interface bodyProps {
  solution: string;
}

export default function Wordle({ solution }: bodyProps) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, isCorrect);
  }, [guesses, isCorrect]);

  return (
    <div>
      <div> solutuon is : {solution}</div>
      <div>{currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  );
}
