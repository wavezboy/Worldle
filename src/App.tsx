import { useEffect, useState } from "react";
import "./App.css";

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

      {solution && <div> solution is : {solution}</div>}
    </div>
  );
}

export default App;
