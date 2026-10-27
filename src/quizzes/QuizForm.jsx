// Styles for quiz cards, answer options, code, and formulas.
import "./Quiz.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import QuizQuestion from "./QuizQuestion.jsx";
import QuizResult from "./QuizResult.jsx";
import { saveQuizResult } from "../js/LearnerProgress.js";

// Shuffle copies of the options without changing the original JSON data.
function shuffleOptions(questions) {
  return questions.map((question) => {
    const options = [...question.options];

    // Fisher–Yates shuffle.
    for (let i = options.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [options[i], options[randomIndex]] = [
        options[randomIndex],
        options[i],
      ];
    }

    // Preserve IDs so scoring remains correct.
    return { ...question, options };
  });
}

// Manage answers, submission, solution visibility, and retries.
function QuizForm({ course, quiz }) {
  const [questions, setQuestions] = useState(() =>
    shuffleOptions(quiz.questions),
  );

  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const answeredCount = questions.filter(
    (question) => answers[question.id] !== undefined,
  ).length;

  const allAnswered =
    questions.length > 0 && answeredCount === questions.length;

  // Compare option IDs rather than their shuffled positions.
  const score = questions.filter(
    (question) => answers[question.id] === question.correctAnswerId,
  ).length;

  function handleAnswer(questionId, optionId) {
    // Prevent changes after submission.
    if (submitted) return;

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: optionId,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!allAnswered || submitted) return;

    // Save the score without revealing individual solutions.
    saveQuizResult(course.id, score, questions.length);
    setSubmitted(true);
  }

  function handleShowAnswers() {
    if (!submitted) return;

    setShowAnswers(true);
  }

  // Reset the attempt and hide solutions again.
  function handleRetry() {
    setAnswers({});
    setSubmitted(false);
    setShowAnswers(false);
    setQuestions(shuffleOptions(quiz.questions));
  }

  return (
    <Container className="quiz-page py-4">
      <Link
        to={`/courses/${course.id}`}
        className="link-primary text-decoration-none"
      >
        ← Back to {course.title}
      </Link>

      <h1 className="mt-4">{quiz.title}</h1>

      <p className="text-body-secondary">
        Answer every question, then submit your quiz. After submission,
        you can choose to reveal the correct answers and explanations.
      </p>

      <p>
        {answeredCount} of {questions.length} questions answered
      </p>

      <Form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <QuizQuestion
            key={question.id}
            question={question}
            questionNumber={index + 1}
            selectedAnswer={answers[question.id]}
            submitted={submitted}
            showAnswers={showAnswers}
            onAnswerChange={handleAnswer}
          />
        ))}

        {/* Display the overall score after submission. */}
        <QuizResult
          score={score}
          totalQuestions={questions.length}
          submitted={submitted}
        />

        <div role="status" className="text-body-secondary mt-3">
          {submitted && (
            <p>
              {showAnswers
                ? "Correct answers and explanations are now shown below each question."
                : "Your answers have been submitted. You can now reveal the correct answers."}
            </p>
          )}
        </div>

        <div className="d-flex flex-wrap gap-2 mt-4">
          {!submitted ? (
            <Button type="submit" disabled={!allAnswered}>
              Submit quiz
            </Button>
          ) : (
            <>
              <Button
                type="button"
                onClick={handleShowAnswers}
                disabled={showAnswers}
              >
                {showAnswers
                  ? "Correct answers shown"
                  : "Show correct answers"}
              </Button>

              <Button
                type="button"
                variant="outline-primary"
                onClick={handleRetry}
              >
                Try again
              </Button>
            </>
          )}

          <Button
            as={Link}
            to={`/courses/${course.id}`}
            variant="outline-secondary"
          >
            Back to course
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default QuizForm;