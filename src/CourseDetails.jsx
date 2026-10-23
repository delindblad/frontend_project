import { Link, useParams } from "react-router-dom";
import { courses } from "./data/courses.js";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

function CourseDetails() {
  
  const { courseId } = useParams();
  const course = courses.find((item) => item.id === courseId);

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
            <h2 className="mb-3">Course content</h2>
            <Card className="border-0 bg-primary-subtle fs-4 ">
              <Card.Body>
                {course.modules?.length ? (
                  <div>
                    {course.modules.map((module) => (
                      <section key={module.id} className="mb-4">
                        <h3 className="h5 fs-4">{module.title}</h3>

                        <ul className="course-content-list mb-0 fs-5">
                          {module.lessons.map((lesson) => (
                            <li key={lesson.id}>{lesson.title}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                ) : (
                  <p className="mb-0 text-body-secondary">
                    Course content not added yet.
                  </p>
                )}
              </Card.Body>
            </Card>
          </section>
        </>
      ) : (
        <div className="alert alert-warning mt-4">Course not found.</div>
      )}
    </Container>
  );
}

export default CourseDetails;
