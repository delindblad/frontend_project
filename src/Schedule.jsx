
import ScheduleComponent from "./ScheduleComponent.jsx";
import Row from "react-bootstrap/Row";
import {Col, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as byPrefixAndName from "@fortawesome/free-solid-svg-icons";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Schedule(props) {
    const currentCourses = props.currentCourses;
    return (

        <Container fluid="sm" className="py-4" >
           {/* <Row>*/}
                {/*<Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Progress</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Row>
            <br/>*/}
            {/*<Row xs={1} md={2} className="bg-primary-subtle">
                <Col className=""><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
                <Col ><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card></Col>
            </Row>*/}
            <br></br>
            <Row className="bg-primary-subtle">
                <Col className="bg-primary-subtle">
                    <ScheduleComponent currentCourses={currentCourses}/>
                </Col>
            </Row>


        </Container>

    );
}

export default Schedule;