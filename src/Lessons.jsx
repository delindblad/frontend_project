import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { courses } from "./data/courses.js";
import {
  loadLearnerProgress,
  markLessonCompleted,
  markLessonOpened,
} from "./js/LearnerProgress.js";

function Lessons() {
  const { courseId, moduleId, lessonId } = useParams();

  const firstCourse = courses[0];
  const firstModule = firstCourse?.modules?.[0];
  const firstLesson = firstModule?.lessons?.[0];

  const [selectedCourseId, setSelectedCourseId] = useState(
    courseId ? courseId : firstCourse?.id ?? "",
  );
  const [selectedModuleId, setSelectedModuleId] = useState(
    moduleId ? moduleId : firstModule?.id ?? "",
  );
  const [selectedLessonId, setSelectedLessonId] = useState(
    lessonId ? lessonId : firstLesson?.id ?? "",
  );

  const [progressState, setProgressState] = useState(() =>
    loadLearnerProgress(),
  );

  const selectedCourse = courses.find(
    (course) => course.id === selectedCourseId,
  );
  const selectedModule = selectedCourse?.modules?.find(
    (module) => module.id === selectedModuleId,
  );
  const selectedLesson = selectedModule?.lessons?.find(
    (lesson) => lesson.id === selectedLessonId,
  );

  const lessonsInCourse =
    selectedCourse?.modules?.flatMap((module) =>
      (module.lessons ?? []).map((lesson) => ({ module, lesson })),
    ) ?? [];

  const currentIndex = lessonsInCourse.findIndex(
    ({ lesson }) => lesson.id === selectedLessonId,
  );

  // Keep lessons in course order so navigation can cross module boundaries.
  const previousLesson = lessonsInCourse[currentIndex - 1];
  const nextLesson = lessonsInCourse[currentIndex + 1];

  const completedLessonIds = progressState.progress?.completedLessonIds ?? [];
  const isCompleted =
    selectedLesson && completedLessonIds.includes(selectedLesson.id);

  useEffect(() => {
    if (selectedCourse && selectedModule && selectedLesson) {
      markLessonOpened({
        courseId: selectedCourse.id,
        moduleId: selectedModule.id,
        lessonId: selectedLesson.id,
      });
    }
  }, [selectedCourse, selectedModule, selectedLesson]);

  function handleCourseChange(event) {
    const course = courses.find((item) => item.id === event.target.value);
    const module = course?.modules?.[0];
    const lesson = module?.lessons?.[0];

    setSelectedCourseId(course?.id ?? "");
    setSelectedModuleId(module?.id ?? "");
    setSelectedLessonId(lesson?.id ?? "");
  }

  function handleModuleSelect(module) {
    setSelectedModuleId(module.id);
    setSelectedLessonId(module.lessons?.[0]?.id ?? "");
  }

  function handleMarkComplete() {
    if (!selectedLesson) return;

    setProgressState(markLessonCompleted(selectedLesson.id));
  }

  // Move to the previous lesson in the course.
  function handlePreviousLesson() {
    if (!previousLesson) return;

    setSelectedModuleId(previousLesson.module.id);
    setSelectedLessonId(previousLesson.lesson.id);
  }

  // Move to the next lesson in the course.
  function handleNextLesson() {
    if (!nextLesson) return;

    setSelectedModuleId(nextLesson.module.id);
    setSelectedLessonId(nextLesson.lesson.id);
  }

  if (!selectedCourse || !selectedLesson) {
    return (
      <Container className="py-4">
        <Alert variant="warning">
          Select a course and lesson to view the lesson content.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4">Lessons and Resources</h1>

      {progressState.warning && (
        <Alert variant="warning">
          Saved progress may not be available in this browser.
        </Alert>
      )}

      <Row className="g-4">
        {/* Lesson selection box */}
        <Col lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Lesson Selection</Card.Title>

              <Form.Label htmlFor="course-select">Course</Form.Label>
              <Form.Select
                id="course-select"
                className="mb-3"
                value={selectedCourseId}
                onChange={handleCourseChange}
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </Form.Select>

              {selectedCourse.modules.map((module) => (
                <section key={module.id} className="mb-3">
                  <Button
                    type="button"
                    variant={
                      selectedModuleId === module.id
                        ? "primary"
                        : "outline-primary"
                    }
                    className="w-100 text-start"
                    aria-expanded={selectedModuleId === module.id}
                    onClick={() => handleModuleSelect(module)}
                  >
                    {module.title}
                  </Button>

                  {selectedModuleId === module.id && (
                    <div className="d-grid gap-2 mt-2 ps-3">
                      {module.lessons.map((lesson) => (
                        <Button
                          key={lesson.id}
                          type="button"
                          variant={
                            selectedLessonId === lesson.id
                              ? "secondary"
                              : "light"
                          }
                          className="text-start"
                          onClick={() => setSelectedLessonId(lesson.id)}
                        >
                          {lesson.title}
                          {completedLessonIds.includes(lesson.id) && " ✓"}
                        </Button>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </Card.Body>
          </Card>
        </Col>

        {/* Selected lesson content box */}
        <Col lg={8}>
          <Card className="lesson-content-card">
            <Card.Body className="d-flex flex-column">
              <div className="lesson-content-scroll">
                <h2>{selectedLesson.title}</h2>

                <section className="mt-4">
                  <h3 className="h5">Short explanation</h3>
                  <p>
                    {selectedLesson.explanation ||
                      "Lesson explanation will be added later."}
                  </p>
                </section>

                <section className="mt-4">
                  <h3 className="h5">Code example</h3>
                  {selectedLesson.codeExample?.code ? (
                    <pre className="rounded bg-body-tertiary p-3">
                      <code>{selectedLesson.codeExample.code}</code>
                    </pre>
                  ) : (
                    <p className="text-body-secondary">
                      No code example has been added yet.
                    </p>
                  )}
                </section>

                <section className="mt-4">
                  <h3 className="h5">Practice activity</h3>
                  <p>
                    {selectedLesson.practiceActivity ||
                      "Practice activity will be added later."}
                  </p>
                </section>

                <section className="mt-4">
                  <h3 className="h5">Resource links</h3>
                  {selectedLesson.resources?.length > 0 ? (
                    <ul>
                      {selectedLesson.resources.map((resource) => (
                        <li key={`${resource.title}-${resource.url}`}>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-body-secondary">
                      No resources have been added yet.
                    </p>
                  )}
                </section>

                <div className="lesson-actions mt-auto pt-3"></div>
                <Button
                  type="button"
                  variant="outline-primary"
                  disabled={!previousLesson}
                  onClick={handlePreviousLesson}
                >
                  ← Previous lesson
                </Button>

                <Button
                  type="button"
                  variant={isCompleted ? "success" : "outline-success"}
                  disabled={isCompleted}
                  onClick={handleMarkComplete}
                >
                  {isCompleted ? "Completed" : "Mark complete"}
                </Button>

                <Button
                  type="button"
                  variant="primary"
                  disabled={!nextLesson}
                  onClick={handleNextLesson}
                >
                  Next lesson →
                </Button>
              </div>

              <div className="mt-3">
                <Button
                  as={Link}
                  to={`/courses/${selectedCourse.id}/quiz`}
                  variant="outline-primary"
                >
                  Take quiz
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Lessons;
