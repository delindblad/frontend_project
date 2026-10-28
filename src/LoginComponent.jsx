import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Container, Row} from "react-bootstrap";
import {currentCourses} from "./data/user.js";

function LoginComponent() {
    const handleSubmit = (event) => {
        localStorage.setItem('loggedIn', true.toString());
    };

    return (

        <Row xs={1} md={2} lg={3}>
            <Container>
            <h2>Sign in please:</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>User ID:</Form.Label>
                    <Form.Control type="texxt" placeholder="Enter user name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
        </Container>
        </Row>
    );
}

export default LoginComponent;