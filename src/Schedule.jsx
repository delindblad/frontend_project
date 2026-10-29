
import ScheduleComponent from "./ScheduleComponent.jsx";
import Row from "react-bootstrap/Row";
import {Col, Container, Tab, Tabs} from "react-bootstrap";
import StudyPlan from "./StudyPlan.jsx";


function Schedule(props) {
    const currentCourses = props.currentCourses;
    return (
        <Container fluid="sm"  defaultActiveKey="One" className="mb-3">
            <Row>
                    <StudyPlan />

            </Row>
        </Container>


    );
}

export default Schedule;