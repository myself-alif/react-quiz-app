import { useQuiz } from "../context/QuizContext";

export default function StartScreen() {
  const { questions, dispatch } = useQuiz();
  const numQuestions = questions.length;
  return (
    <div className="start">
      <h2>Welcome to react quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}
