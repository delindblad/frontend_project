import { courses } from "./data/courses.js";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Courses.css"

const logos = import.meta.glob("./assets/course-logos/*.png", {
  eager: true,
  import: "default",
})

const levelIcons = import.meta.glob("./assets/level-icons/*.svg", {
  eager: true, 
  import: "default",
})

console.log(logos)

function Courses() {
  return (
    <Container className="courses-page py-4">
      <h1 className="mb-4">Courses</h1>

      <Row xs={1}>
        {courses.map((course) => (
          <Col key={course.id}>
            <Card
              as={Link}
              to={`/courses/${course.id}`}
              className="my-card"
            >
              <Card.Body className="card-body">
                
                <Card.Title className="card-title">
                  <img className="course-logo" src={logos[`./assets/course-logos/${course.id}.png`]}/>
                  {course.title}
                </Card.Title>
                <Card.Text className="card-text">
                  {course.description}
                </Card.Text>

                <div className="course-level">
                  <img className="course-level-logo" src={levelIcons[`./assets/level-icons/${course.level}.svg`]}/>
                  {course.level}
                </div>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Courses;
