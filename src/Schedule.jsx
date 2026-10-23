
import ScheduleComponent from "./ScheduleComponent.jsx";
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";

function Schedule(props) {
    return (
        <Container className="py-4">
            <h1 className="mb-4">Schedule</h1>
            <Row xs={1}  className="g-4">
        <div>

            <ScheduleComponent schedule={props.schedule} />
        </div>
            </Row>
        </Container>
    );
}

export default Schedule;