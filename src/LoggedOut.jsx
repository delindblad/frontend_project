import {Alert, Container} from "react-bootstrap";
import Home from "./Home.jsx";

function LoggedOut() {
    localStorage.removeItem('loggedIn');



    return (
        <Container>
        <Alert key={'success'} variant={'success'}>
            <h1>You have been signed out!</h1>
        </Alert>
            {window.location.replace('/mylearning')}

        </Container>
    )
}

export default LoggedOut;