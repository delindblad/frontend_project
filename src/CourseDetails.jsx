import { Link, useParams } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { courses } from './data/courses.js';
import { Badge, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === courseId);

  return (
  <>
    <NavBar />

    <Container className="py-4">
      <Link
        to="/courses"
        className="link-primary text-decoration-none"
      >
        ← Back to courses
      </Link>

      {course ? (
        <>
          <header className="mt-3 rounded-3 bg-primary-subtle p-4 p-lg-5">
            <Badge bg="primary">{course.level}</Badge>

            <h1 className="mt-3">{course.title}</h1>

            <p className="lead mb-2">{course.description}</p>

            <p className="mb-0 text-body-secondary">
              Approx. {course.estimatedMinutes} minutes
            </p>
          </header>

          <Row className="g-4 mt-1">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="fs-2 bg-success-subtle text-success-emphasis fw-semibold ">
                  Learning objective
                </Card.Header>
                <Card.Body>
                  <Card.Text className="fs-4 mb-0">
                    {course.objective || 'Learning objective not added yet.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="fs-2 bg-warning-subtle text-warning-emphasis fw-semibold">
                  Prerequisites
                </Card.Header>
                <Card.Body>
                  <Card.Text className="fs-4 mb-0">
                    {course.prerequisites || 'No prerequisites listed yet.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <section className="mt-4">
            <h2 className="fs-2 mb-3">Course content</h2>

            <ListGroup>
              {course.content?.length ? (
                course.content.map((item, index) => (
                  <ListGroup.Item
                    key={`${course.id}-${index}`}
                    className="fs-4 d-flex align-items-center gap-3"
                  >
                    <Badge bg="primary" pill>
                      {index + 1}
                    </Badge>
                    {item}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="text-body-secondary">
                  Course content not added yet.
                </ListGroup.Item>
              )}
            </ListGroup>
          </section>
        </>
      ) : (
        <div className="alert alert-warning mt-4">
          Course not found.
        </div>
      )}
    </Container>
  </>
);}

export default CourseDetails;import { Link, useParams } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { courses } from './data/courses.js';
import { Badge, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';

function CourseDetails() {
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === courseId);

  return (
  <>
    <NavBar />

    <Container className="py-4">
      <Link
        to="/courses"
        className="link-primary text-decoration-none"
      >
        ← Back to courses
      </Link>

      {course ? (
        <>
          <header className="mt-3 rounded-3 bg-primary-subtle p-4 p-lg-5">
            <Badge bg="primary">{course.level}</Badge>

            <h1 className="mt-3">{course.title}</h1>

            <p className="lead mb-2">{course.description}</p>

            <p className="mb-0 text-body-secondary">
              Approx. {course.estimatedMinutes} minutes
            </p>
          </header>

          <Row className="g-4 mt-1">
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Header className="bg-success-subtle text-success-emphasis fw-semibold">
                  Learning objective
                </Card.Header>
                <Card.Body>
                  <Card.Text className="fs-4 mb-0">
                    {course.objective || 'Learning objective not added yet.'}
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
                    {course.prerequisites || 'No prerequisites listed yet.'}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <section className="mt-4">
            <h2 className="mb-3">Course content</h2>

            <ListGroup>
              {course.content?.length ? (
                course.content.map((item, index) => (
                  <ListGroup.Item
                    key={`${course.id}-${index}`}
                    className="d-flex align-items-center gap-3"
                  >
                    <Badge bg="primary" pill>
                      {index + 1}
                    </Badge>
                    {item}
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="text-body-secondary">
                  Course content not added yet.
                </ListGroup.Item>
              )}
            </ListGroup>
          </section>
        </>
      ) : (
        <div className="alert alert-warning mt-4">
          Course not found.
        </div>
      )}
    </Container>
  </>
);}

export default CourseDetails;