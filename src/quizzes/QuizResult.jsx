import { Alert } from "react-bootstrap";

// Display the final score after the learner submits the quiz.
function QuizResult({ score, totalQuestions, submitted }) {
  // Guard against division by zero if a quiz has no questions.
  const percentage =
    totalQuestions > 0
      ? Math.round((score / totalQuestions) * 100)
      : 0;

  return (
    // Keep this region mounted so screen readers can announce the result.
    <div aria-live="polite" aria-atomic="true">
      {submitted && (
        <Alert variant="info" className="mt-4">
          <h2 className="h4">Your result</h2>

          <p className="mb-0">
            You scored {score} out of {totalQuestions} ({percentage}%).
          </p>
        </Alert>
      )}
    </div>
  );
}

export default QuizResult;