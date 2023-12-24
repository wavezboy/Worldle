import Row from "./Row";

interface guesses {
  key: string;
  color: string;
}
interface bodyProps {
  guesses: guesses[];
  currentGuess: string;
  turn: number;
}

export default function Grid({ guesses, currentGuess, turn }: bodyProps) {
  return (
    <div>
      {guesses.map((l, i) => {
        return <Row key={i} />;
      })}
    </div>
  );
}
