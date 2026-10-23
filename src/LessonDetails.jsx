import { Link, useParams } from "react-router-dom";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { courses } from "./data/courses.js";

function LessonDetails() {
  const { courseId, moduleId, lessonId } = useParams();

  const course = courses.find((item) => item.id === courseId);
  const selectedModule = course?.modules?.find(
    (item) => item.id === moduleId,
  );
  const lesson = selectedModule?.lessons?.find(
    (item) => item.id === lessonId,
  );

  if (!course || !selectedModule || !lesson) {
    return (
      <Container className="py-4">
        <Alert variant="warning">Lesson not found.</Alert>
        <Link to="/courses">Back to courses</Link>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Link
        to={`/courses/${course.id}`}
        className="link-primary text-decoration-none"
      >
        ← Back to {course.title}
      </Link>

      <p className="text-body-secondary mt-4 mb-1">{selectedModule.title}</p>
      <h1>{lesson.title}</h1>

      <Card className="mt-4 border-0 bg-primary-subtle">
        <Card.Body>
          {lesson.content?.length ? (
            lesson.content.map((paragraph, index) => (
              <p key={`${lesson.id}-${index}`}>{paragraph}</p>
            ))
          ) : (
            <p className="mb-0 text-body-secondary">
              Lesson content will be added soon.
            </p>
          )}
        </Card.Body>
      </Card>

      <Button
        as={Link}
        to={`/courses/${course.id}`}
        variant="outline-primary"
        className="mt-4"
      >
        Back to course
      </Button>
    </Container>
  );
}

export default LessonDetails;