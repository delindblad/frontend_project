import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import QuizQuestion from "./QuizQuestion.jsx";
import QuizResult from "./QuizResult.jsx";

// Manage the quiz answers, submission, scoring, and retry.
function QuizForm({ course, quiz }) {
  // Store answers as question ID → selected option ID.
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Count answered questions to track progress and enable submission.
  const answeredCount = quiz.questions.filter(
    (question) => answers[question.id] !== undefined,
  ).length;

  const allAnswered = answeredCount === quiz.questions.length;

  // Calculate the score from the current answers.
  const score = quiz.questions.filter(
    (question) => answers[question.id] === question.correctAnswerId,
  ).length;

  // Update one answer while preserving all other answers.
  function handleAnswer(questionId, optionId) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: optionId,
    }));
  }

  // Prevent a page reload and reveal feedback once all answers are filled.
  function handleSubmit(event) {
    event.preventDefault();

    if (allAnswered) {
      setSubmitted(true);
    }
  }

  // Clear the answers and hide feedback for a fresh attempt.
  function handleRetry() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <Container className="py-4">
      <Link
        to={`/courses/${course.id}`}
        className="link-primary text-decoration-none"
      >
        ← Back to {course.title}
      </Link>

      <h1 className="mt-4">{quiz.title}</h1>

      <p className="text-body-secondary">
        Choose one answer for each question, then submit your quiz.
      </p>

      <p>
        {answeredCount} of {quiz.questions.length} questions answered
      </p>

      <Form onSubmit={handleSubmit}>
        {/* Pass each question its selected answer and update callback. */}
        {quiz.questions.map((question, index) => (
          <QuizQuestion
            key={question.id}
            question={question}
            questionNumber={index + 1}
            selectedAnswer={answers[question.id]}
            submitted={submitted}
            onAnswerChange={handleAnswer}
          />
        ))}

        {/* Keep the result component mounted for accessible announcements. */}
        <QuizResult
          score={score}
          totalQuestions={quiz.questions.length}
          submitted={submitted}
        />

        <div className="d-flex flex-wrap gap-2 mt-4">
          {/* Replace the submit button with retry after submission. */}
          {submitted ? (
            <Button type="button" onClick={handleRetry}>
              Try again
            </Button>
          ) : (
            <Button type="submit" disabled={!allAnswered}>
              Submit quiz
            </Button>
          )}

          <Button
            as={Link}
            to={`/courses/${course.id}`}
            variant="outline-primary"
          >
            Back to course
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default QuizForm;