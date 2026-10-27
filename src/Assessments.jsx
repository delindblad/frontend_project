import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { courses } from "./data/courses.js";
import quizzes from "./data/quizzes/quizRegistry.js";
import QuizForm from "./quizzes/QuizForm.jsx";
import {
  loadLearnerProgress,
  resetQuizResult,
  resetAllQuizResults,
} from "./js/LearnerProgress.js";
import "./quizzes/Quiz.css";

// Only include courses that have a non-empty quiz.
const availableCourses = courses.filter(
  (course) => quizzes[course.id]?.questions?.length > 0,
);

function Assessments() {
  const [selectedCourseId, setSelectedCourseId] = useState(
    availableCourses[0]?.id ?? "",
  );

  // Changing this value resets the displayed quiz form.
  const [attemptVersion, setAttemptVersion] = useState(0);
  const [notice, setNotice] = useState(null);

  const selectedCourse = availableCourses.find(
    (course) => course.id === selectedCourseId,
  );

  const selectedQuiz = quizzes[selectedCourseId];

  function handleCourseChange(event) {
    setSelectedCourseId(event.target.value);
    setNotice(null);
  }

  function handleResetSelected() {
    if (!selectedCourse) return;

    // Read the latest results, including newly submitted attempts.
    const { progress, warning } = loadLearnerProgress();

    if (warning) {
      setNotice({
        variant: "danger",
        message: "Saved quiz results could not be read. Please try again.",
      });
      return;
    }

    const hasResult = Object.prototype.hasOwnProperty.call(
      progress.quizResultsByCourseId,
      selectedCourse.id,
    );

    // Preserve the current attempt if there is no saved result.
    if (!hasResult) {
      setNotice({
        variant: "info",
        message: "No quiz result to reset for this course.",
      });
      return;
    }

    const confirmed = window.confirm(
      `Reset the saved quiz result for "${selectedCourse.title}"?\n\n` +
        "Your current attempt will also be cleared. " +
        "Lesson progress will be kept.",
    );

    if (!confirmed) return;

    const result = resetQuizResult(selectedCourse.id);

    if (!result.saved) {
      setNotice({
        variant: "danger",
        message:
          "The reset could not be saved. Your current attempt has been kept. Please try again.",
      });
      return;
    }

    setAttemptVersion((previous) => previous + 1);
    setNotice({
      variant: "success",
      message:
        "The selected quiz result has been reset. You can start a fresh attempt. Lesson progress has been kept.",
    });
  }

  function handleResetAll() {
    const { progress, warning } = loadLearnerProgress();

    if (warning) {
      setNotice({
        variant: "danger",
        message: "Saved quiz results could not be read. Please try again.",
      });
      return;
    }

    // Show an information message when nothing is saved.
    if (Object.keys(progress.quizResultsByCourseId).length === 0) {
      setNotice({
        variant: "info",
        message: "No quiz results to reset.",
      });
      return;
    }

    const confirmed = window.confirm(
      "Reset ALL saved quiz results in this browser?\n\n" +
        "Your current attempt will also be cleared. " +
        "Lesson progress will be kept. This cannot be undone.",
    );

    if (!confirmed) return;

    const result = resetAllQuizResults();

    if (!result.saved) {
      setNotice({
        variant: "danger",
        message:
          "The reset could not be saved. Your current attempt has been kept. Please try again.",
      });
      return;
    }

    setAttemptVersion((previous) => previous + 1);
    setNotice({
      variant: "success",
      message:
        "All saved quiz results have been reset. Lesson progress has been kept.",
    });
  }

  return (
    <>
      <Container className="quiz-page pt-4">
        <h1>Assessments</h1>

        <p className="text-body-secondary">
          Choose a course quiz to check your understanding. Submit your
          answers to see your score, then choose whether to reveal the
          correct answers and explanations.
        </p>

        {/* Open My Learning using the softly coloured progress button. */}
        <Button
          as={Link}
          to="/mylearning"
          variant="outline-primary"
          className="assessment-progress-button mb-4"
        >
          View my progress
        </Button>

        {availableCourses.length > 0 ? (
          <Form.Group controlId="assessment-course" className="mb-3">
            <Form.Label className="fw-semibold">
              Choose a quiz
            </Form.Label>

            <Form.Select
              value={selectedCourseId}
              onChange={handleCourseChange}
              aria-describedby="assessment-switch-help"
            >
              {availableCourses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </Form.Select>

            <Form.Text id="assessment-switch-help">
              Switching quizzes clears your current attempt. Previously
              saved results are kept.
            </Form.Text>
          </Form.Group>
        ) : (
          <Alert variant="info">
            No quizzes are available yet.
          </Alert>
        )}

        {/* Reset quiz results while preserving lesson progress. */}
        <div className="assessment-reset-actions mt-3">
          <Button
            type="button"
            variant="outline-secondary"
            className="assessment-reset-button assessment-reset-selected"
            onClick={handleResetSelected}
            disabled={!selectedCourse}
          >
            <FontAwesomeIcon icon={faRotateLeft} aria-hidden="true" />
            <span>Reset selected quiz result</span>
          </Button>

          <Button
            type="button"
            variant="outline-danger"
            className="assessment-reset-button assessment-reset-all"
            onClick={handleResetAll}
          >
            <FontAwesomeIcon icon={faTrashCan} aria-hidden="true" />
            <span>Reset all quiz results</span>
          </Button>
        </div>

        <p className="small text-body-secondary mt-2">
          Resets affect quiz results saved in this browser only.
          Completed lessons are kept.
        </p>

        {/* Announce reset outcomes and empty-result messages. */}
        <div aria-live="polite" aria-atomic="true">
          {notice && (
            <Alert
              variant={notice.variant}
              className="mt-3"
              dismissible
              onClose={() => setNotice(null)}
            >
              {notice.message}
            </Alert>
          )}
        </div>
      </Container>

      {/* Start a fresh form when switching quizzes or resetting results. */}
      {selectedCourse && selectedQuiz && (
        <QuizForm
          key={`${selectedCourse.id}-${attemptVersion}`}
          course={selectedCourse}
          quiz={selectedQuiz}
        />
      )}
    </>
  );
}

export default Assessments;