import { Link, useParams } from "react-router-dom";
import { courses } from "./data/courses.js";
import { Badge, Card, Col, Container, Row, Button } from "react-bootstrap";
import { useState } from "react";

// Check whether the selected course has a registered quiz.
import quizzes from "./data/quizzes/quizRegistry.js";

function CourseDetails() {
  const { courseId } = useParams();
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const course = courses.find((item) => item.id === courseId);
  const selectedModule = course?.modules?.find(
    (module) => module.id === selectedModuleId,
  );

  const firstLesson = selectedModule?.lessons?.[0];

  return (
    <Container className="py-4">
      <Link to="/courses" className="link-primary text-decoration-none">
        ← Back to courses
      </Link>

      {course ? (
        <>
          <header className="fs-4 mt-3 rounded-3 bg-primary-subtle p-4 p-lg-5">
            <Badge bg="primary">{course.level}</Badge>
            <h1 className="mt-3">{course.title}</h1>
            <p className="lead mb-2">{course.description}</p>
            <p className="mb-0 text-body-secondary">
              Approx. {course.estimatedMinutes} minutes
            </p>
          </header>

          <Row className="fs-3 g-4 mt-1">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-success-subtle text-success-emphasis fw-semibold">
                  Learning objective
                </Card.Header>
                <Card.Body>
                  <Card.Text className="fs-4 mb-0">
                    {course.objective || "Learning objective not added yet."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-warning-subtle text-warning-emphasis fw-semibold">
                  Prerequisites
                </Card.Header>
                <Card.Body>
                  <Card.Text className="fs-4 mb-0">
                    {course.prerequisites || "No prerequisites listed yet."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <section className="mt-4">
            <h2 className="mb-3">Course modules</h2>

            <div className="d-flex flex-wrap gap-2 mb-3">
              {course.modules.map((module) => (
                <Button
                  key={module.id}
                  variant={
                    selectedModuleId === module.id
                      ? "primary"
                      : "outline-primary"
                  }
                  aria-pressed={selectedModuleId === module.id}
                  onClick={() => setSelectedModuleId(module.id)}
                >
                  {module.title}
                </Button>
              ))}
            </div>

            {selectedModule && (
              <Card className="border-0 bg-primary-subtle">
                <Card.Body>
                  <h3>{selectedModule.title}</h3>

                  <h4 className="mt-3">Learning objectives</h4>
                  <ul>
                    {selectedModule.learningObjectives.map((objective) => (
                      <li key={objective}>{objective}</li>
                    ))}
                  </ul>

                  <h4>Lessons</h4>
                  <ul>
                    {selectedModule.lessons.map((lesson) => (
                      <li key={lesson.id}>{lesson.title}</li>
                    ))}
                  </ul>

                  {firstLesson && (
                    <Button
                      as={Link}
                      to={`/courses/${course.id}/modules/${selectedModule.id}/lessons/${firstLesson.id}`}
                    >
                      Start module
                    </Button>
                  )}
                </Card.Body>
              </Card>
            )}
          </section>

          {/* Show the quiz entry point only when this course has questions. */}
          {quizzes[course.id]?.questions?.length > 0 && (
            <section className="mt-4">
              <Card className="border-0 bg-success-subtle">
                <Card.Body>
                  <h2 className="h4">Test your knowledge</h2>

                  <p>
                    Take the course quiz to check your understanding and
                    review explanations of the answers.
                  </p>

                  {/* Open the shared quiz page for this course. */}
                  <Button
                    as={Link}
                    to={`/courses/${course.id}/quiz`}
                    variant="success"
                  >
                    Take quiz
                  </Button>
                </Card.Body>
              </Card>
            </section>
          )}
        </>
      ) : (
        <div className="alert alert-warning mt-4">Course not found.</div>
      )}
    </Container>
  );
}

export default CourseDetails;