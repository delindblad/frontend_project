import {Alert, Container} from "react-bootstrap";

function LoggedOut() {
    localStorage.removeItem('loggedIn');



    return (
        <Container>
        <Alert key={'success'} variant={'success'}>
            <h1>You have been signed out!</h1>
        </Alert>
            {window.location.replace('./mylearning')}

        </Container>
    )
}

export default LoggedOut;