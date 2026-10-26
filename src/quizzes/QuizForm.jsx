import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import QuizQuestion from "./QuizQuestion.jsx";
import QuizResult from "./QuizResult.jsx";
import { saveQuizResult } from "../js/LearnerProgress.js";

// Copy and shuffle each question's options without changing the JSON data.
function shuffleOptions(questions) {
  return questions.map((question) => {
    const options = [...question.options];

    // Fisher–Yates shuffle: randomly rearrange the answer options.
    for (let i = options.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [options[i], options[randomIndex]] = [options[randomIndex], options[i]];
    }

    // Preserve the question and option IDs so scoring remains correct.
    return { ...question, options };
  });
}

// Manage the quiz answers, submission, scoring, and retry.
function QuizForm({ course, quiz }) {
  // Shuffle when the quiz opens, keeping options stable while answering.
  const [questions, setQuestions] = useState(() =>
    shuffleOptions(quiz.questions),
  );

  // Store answers as question ID → selected option ID.
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Count answered questions to track progress and enable submission.
  const answeredCount = questions.filter(
    (question) => answers[question.id] !== undefined,
  ).length;

  const allAnswered = answeredCount === questions.length;

  // Compare option IDs, so shuffled positions do not affect scoring.
  const score = questions.filter(
    (question) => answers[question.id] === question.correctAnswerId,
  ).length;

  // Update one answer while preserving all other answers.
  function handleAnswer(questionId, optionId) {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [questionId]: optionId,
    }));
  }

function handleSubmit(event) {
  event.preventDefault();

  console.log("Submit", {
    allAnswered,
    courseId: course.id,
    score,
    totalQuestions: questions.length,
  });

  if (allAnswered) {
    const result = saveQuizResult(course.id, score, questions.length);

    console.log("saveQuizResult returned:", result);
    console.log("localStorage keys:", Object.keys(localStorage));

    setSubmitted(true);
  }
}





  // Prevent a page reload and reveal feedback after every question is answered.
  // Also saves the result in localStorage
  // function handleSubmit(event) {
  //   event.preventDefault();

  //   if (allAnswered) {
  //     saveQuizResult(course.id, score, questions.length);
  //     setSubmitted(true);
  //   }
  // }

  // Clear the previous attempt and reshuffle options for a fresh attempt.
  function handleRetry() {
    setAnswers({});
    setSubmitted(false);
    setQuestions(shuffleOptions(quiz.questions));
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
        {answeredCount} of {questions.length} questions answered
      </p>

      <Form onSubmit={handleSubmit}>
        {/* Display each question with its shuffled answer options. */}
        {questions.map((question, index) => (
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
          totalQuestions={questions.length}
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
