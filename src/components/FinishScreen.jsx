import { useQuiz } from "../context/QuizContext";

export default function FinishScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.round((points / maxPoints) * 100)})%
      </p>
      <p className="highscore">Highest score : {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Play again
      </button>
    </>
  );
}
