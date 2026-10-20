// React Router handles navigation without reloading the entire page.
import { Link } from 'react-router-dom';

// React Bootstrap components provide styling and responsive behaviour.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        // Display the full navigation on large screens.
        // On smaller screens, show a button to expand or collapse it.
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* Clicking the platform name takes the user to Home. */}
                <Navbar.Brand as={Link} to="/">
                    E-learning platform
                </Navbar.Brand>

                {/* aria-controls connects this button to the collapsible menu. */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* as={Link} combines Bootstrap styling with React Router.
                            The router adds /frontend_project automatically. */}
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="/courses">
                            Courses
                        </Nav.Link>

                        {/* Placeholder links: these require page sections
                            with matching IDs, or replacement with future routes. */}
                        <Nav.Link href="#lessons">
                            Lessons
                        </Nav.Link>

                        <Nav.Link href="#schedule">
                            Schedule
                        </Nav.Link>

                        <Nav.Link href="#assessments">
                            Assessments
                        </Nav.Link>

                        <Nav.Link as={Link} to="/mylearning">
                            My Learning
                        </Nav.Link>

                        {/* Example dropdown: replace these items when the
                            group decides which additional links are needed. */}
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;