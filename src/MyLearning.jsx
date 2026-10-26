import { useState } from "react";
import { Alert, Card, Container, ProgressBar } from "react-bootstrap";
import { courses } from "./data/courses.js";
import { loadLearnerProgress } from "./js/LearnerProgress.js";

function MyLearning() {
  // Læs gemt fremgang, når siden åbnes.
  const [{ progress, warning }] = useState(() => loadLearnerProgress());

  const allLessons = courses.flatMap((course) =>
    (course.modules ?? []).flatMap((module) => module.lessons ?? []),
  );

  const completedLessons = allLessons.filter((lesson) =>
    progress.completedLessonIds.includes(lesson.id),
  );

  const completionPercentage =
    allLessons.length > 0
      ? Math.round((completedLessons.length / allLessons.length) * 100)
      : 0;

  const lastOpened = progress.lastOpenedLesson;
  const lastOpenedCourse = courses.find(
    (course) => course.id === lastOpened?.courseId,
  );
  const lastOpenedLesson = lastOpenedCourse?.modules
    ?.flatMap((module) => module.lessons ?? [])
    .find((lesson) => lesson.id === lastOpened?.lessonId);

  const quizResults = Object.entries(
    progress.quizResultsByCourseId ?? {},
  );

  return (
    <Container className="py-4">
      <h1 className="mb-4">My Learning</h1>

      {warning && (
        <Alert variant="warning">
          Saved progress could not be loaded. You can continue with empty
          progress.
        </Alert>
      )}

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Lesson progress</Card.Title>
          <p>
            {completedLessons.length} of {allLessons.length} lessons completed
          </p>
          <ProgressBar now={completionPercentage} />
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Continue learning</Card.Title>
          {lastOpenedLesson ? (
            <p className="mb-0">
              Last opened: <strong>{lastOpenedLesson.title}</strong> in{" "}
              {lastOpenedCourse.title}
            </p>
          ) : (
            <p className="mb-0 text-body-secondary">
              No lesson opened yet.
            </p>
          )}
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Latest quiz results</Card.Title>

          {quizResults.length > 0 ? (
            quizResults.map(([courseId, result]) => {
              const course = courses.find((item) => item.id === courseId);

              return (
                <p key={courseId}>
                  <strong>{course?.title ?? courseId}:</strong>{" "}
                  {result.score} of {result.totalQuestions} (
                  {result.percentage}%)
                </p>
              );
            })
          ) : (
            <p className="mb-0 text-body-secondary">
              No quiz results saved yet.
            </p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyLearning;