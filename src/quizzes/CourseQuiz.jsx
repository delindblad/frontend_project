import { Link, useParams } from "react-router-dom";
import { Alert, Button, Container } from "react-bootstrap";
import { courses } from "../data/courses.js";
import quizzes from "../data/quizzes/quizRegistry.js";
import QuizForm from "./QuizForm.jsx";

// Find the course and quiz associated with the current URL.
function CourseQuiz() {
  const { courseId } = useParams();

  const course = courses.find((item) => item.id === courseId);
  const quiz = quizzes[courseId];

  // Show a helpful message for an invalid course or unavailable quiz.
  if (!course || !quiz || !quiz.questions?.length) {
    return (
      <Container className="py-4">
        <Alert variant="warning">
          {!course
            ? "Course not found."
            : "A quiz is not available for this course yet."}
        </Alert>

        <Button as={Link} to="/courses" variant="outline-primary">
          Back to courses
        </Button>
      </Container>
    );
  }

  // A different course ID resets the form's answers and submission state.
  return <QuizForm key={courseId} course={course} quiz={quiz} />;
}

export default CourseQuiz;