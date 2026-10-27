import { Alert, Card, Form } from "react-bootstrap";
import QuizContent from "./QuizContent.jsx";

// Display a question while QuizForm manages answers and submission.
function QuizQuestion({
  question,
  questionNumber,
  selectedAnswer,
  submitted,
  showAnswers = false,
  onAnswerChange,
}) {
  const isCorrect = selectedAnswer === question.correctAnswerId;

  const correctOption = question.options.find(
    (option) => option.id === question.correctAnswerId,
  );

  // Reveal feedback only after submission and an explicit request.
  const revealFeedback = submitted && showAnswers;
  const questionTextId = `question-text-${question.id}`;

  return (
    <Card className="quiz-question mb-4 border-0 shadow-sm">
      <Card.Body className="p-4">
        <fieldset aria-describedby={questionTextId}>
          <legend className="fs-6 fw-bold text-secondary mb-3">
            Question {questionNumber}
          </legend>

          {/* Render question text, code blocks, and LaTeX formulas. */}
          <div
            id={questionTextId}
            className="quiz-question-text fs-5 mb-4"
          >
            <QuizContent>{question.question}</QuizContent>
          </div>

          {/* Lock choices after submission without revealing answers. */}
          {question.options.map((option) => (
            <Form.Check
              key={option.id}
              type="radio"
              id={`${question.id}-${option.id}`}
              name={question.id}
              label={
                <QuizContent>{option.text}</QuizContent>
              }
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={() => onAnswerChange(question.id, option.id)}
              disabled={submitted}
              required
              className="quiz-option mb-3"
            />
          ))}
        </fieldset>

        {/* Show feedback only when the learner requests the answers. */}
        {revealFeedback && (
          <Alert
            variant={isCorrect ? "success" : "danger"}
            className="mt-4 mb-0"
          >
            <p className="fw-semibold mb-2">
              {isCorrect ? "Correct!" : "Incorrect."}
            </p>

            <div className="mb-2">
              <strong>Correct answer:</strong>
              <QuizContent>{correctOption?.text}</QuizContent>
            </div>

            {question.explanation && (
              <div className="quiz-explanation">
                <QuizContent>{question.explanation}</QuizContent>
              </div>
            )}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default QuizQuestion;