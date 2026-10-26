import { Alert, Card, Form } from "react-bootstrap";

// Display one question using data and callbacks supplied by QuizForm.
// QuizForm owns the answers and submission state.
function QuizQuestion({
  question,
  questionNumber,
  selectedAnswer,
  submitted,
  onAnswerChange,
}) {
  // Compare the selected option's ID with the correct answer's ID.
  const isCorrect = selectedAnswer === question.correctAnswerId;

  // Find the correct option so its text can be shown after submission.
  const correctOption = question.options.find(
    (option) => option.id === question.correctAnswerId,
  );

  return (
    <Card className="mb-3 border-0 shadow-sm">
      <Card.Body>
        {/* Group the answer options under an accessible question label. */}
        <fieldset>
          <legend
            className="fs-5 fw-semibold"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {questionNumber}. {question.question}
          </legend>

          {/* A shared name allows only one selected option per question. */}
          {question.options.map((option) => (
            <Form.Check
              key={option.id}
              type="radio"
              id={`${question.id}-${option.id}`}
              name={question.id}
              label={option.text}
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={() => onAnswerChange(question.id, option.id)}
              disabled={submitted}
              required
              className="mb-2"
            />
          ))}
        </fieldset>

        {/* Reveal the result and explanation only after submission. */}
        {submitted && (
          <Alert
            variant={isCorrect ? "success" : "danger"}
            className="mt-3 mb-0"
          >
            <p className="fw-semibold mb-1">
              {isCorrect ? "Correct!" : "Incorrect."}
            </p>

            {!isCorrect && (
              <p className="mb-1">
                Correct answer: {correctOption?.text}
              </p>
            )}

            <p className="mb-0">{question.explanation}</p>
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}

export default QuizQuestion;