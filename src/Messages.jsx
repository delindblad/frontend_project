import {Badge, Row, Stack} from "react-bootstrap";

function Messages() {
    return (
        <Stack direction="horizontal" gap={2}>
            <div className={'m-3'}>
            <Row><Badge bg="primary"><h6>Hi!</h6></Badge>

            </Row>
                <br />
            <Row>
                <Badge  bg="primary"><h6>Hi! Nice weather.</h6></Badge>
            </Row>
                <br />

                <Row><Badge bg="primary"><h6>Yeah</h6></Badge>
                </Row>
            </div>
        </Stack>
    )
}

export default Messages;