import {Col, Container, InputGroup, Row, Stack} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import {courses} from "./data/courses.js";
import {getCourseTitle} from "./js/util.js";
import {demoUserData} from "./data/user.js";

function StudyPlan() {
    const enrollment = demoUserData.enrollment;
    return (
        <Container>

            <Row>
                <Col xs={8}>
                    <h3 className="">Suggested study plan</h3>

                </Col>


            </Row>
            <Row>
                <Col>
                    <Stack gap={4}>
                        {
                            enrollment.map(
                                (item, index) =>
                                    <Card key={index} bg={"primary-subtle"} border={"dark"}>
                                    <Card.Header><h5>{index + 1}. {getCourseTitle(courses, item)} </h5></Card.Header>
                                    <div className={"d-inline m-3"}>
                                        Read lessons, create content, take quiz
                                        <Button className={"fa-pull-right"} variant="primary" href={"/courses/" + item }>Open activity</Button>
                                    </div>
                                </Card>
                            )
                        }

                    </Stack>

                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>
            <Row>
                <Col>

                </Col>
            </Row>

        </Container>
    )
}

export default StudyPlan