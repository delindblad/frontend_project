
import ScheduleComponent from "./ScheduleComponent.jsx";
import Row from "react-bootstrap/Row";
import {Col, Container} from "react-bootstrap";


function Schedule(props) {
    const currentCourses = props.currentCourses;
    return (

        <Container fluid="sm" className="py-4"  >

                <Row className="bg-primary-subtle">
                    <Col className="bg-primary-subtle">
                        <ScheduleComponent currentCourses={currentCourses}/>
                    </Col>
                </Row>


        </Container>

    );
}

export default Schedule;