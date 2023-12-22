import { useEffect } from "react";
import useWordle from "../hooks/useWordle";

interface bodyProps {
  solution: string;
}

export default function Wordle({ solution }: bodyProps) {
  const { currentGuess, handleKeyup } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [handleKeyup]);

  return <div>{currentGuess}</div>;
}
