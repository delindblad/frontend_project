

import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";
import StudyPlan from "./StudyPlan.jsx";


function Schedule() {
    //const currentCourses = props.currentCourses;
    return (
        <Container fluid="sm"  defaultActiveKey="One" className="mb-3">
            <Row>
                    <StudyPlan />

            </Row>
        </Container>


    );
}

export default Schedule;