import { useEffect, useState } from "react";
import "./App.css";
import Wordle from "./components/Wordle";

interface solutionBody {
  id: number;
  word: string;
}

function App() {
  const [solution, setSolution] = useState<string>();
  useEffect(() => {
    fetch("http://localhost:5000/solution")
      .then((res) => res.json())
      .then((res) => {
        const randomSolution = res[Math.floor(Math.random() * res.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle (Lingo) </h1>

      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
