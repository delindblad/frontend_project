import NavBar from "./NavBar.jsx";
import { courses } from "./data/courses.js";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Courses() {

  return (
    <>
      <NavBar />

      <Container className="py-4">
        <h1 className="mb-4">Courses</h1>

        <Row xs={1} md={2} lg={3} className="g-4">
          {courses.map((course) => (
            <Col key={course.id}>
              <Card
                as={Link}
                to={`/courses/${course.id}`}
                className="h-100 shadow-sm border-top border-4 border-primary bg-primary-subtle"
              >
                <Card.Body>
                  <Badge bg="secondary" className="mb-3">
                    {course.level}
                  </Badge>

                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {course.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Courses;
