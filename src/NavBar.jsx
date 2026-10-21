// React Router handles navigation and identifies the active page.
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Load the shared styles, including the pale-blue header.
import './App.css';

function NavBar() {
    return (
        // Show all links on large screens and a collapsible menu on smaller screens.
        <Navbar expand="lg" className="home-navbar py-3">
            <Container>
                <Navbar.Brand href="./">E-learning platform</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="./Courses">Courses</Nav.Link>
                        <Nav.Link href="./Lessons">Lessons</Nav.Link>
                        <Nav.Link href="./Schedule">Schedule</Nav.Link>
                        <Nav.Link href="./Assessements">Assessements</Nav.Link>
                        <Nav.Link href="./MyLearning">My Learning</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                {/* Clicking the platform name returns to the Home page. */}
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="home-navbar-brand"
                >
                    E-learning platform
                </Navbar.Brand>

                {/* Toggle the mobile navigation menu. */}
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    aria-label="Toggle navigation"
                >
                    <span className="fs-6">Menu</span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-lg-1">
                        {/* Highlight Home only when the URL matches exactly. */}
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/courses">
                            Courses
                        </Nav.Link>

                        {/* Replace these placeholders when the pages are ready. */}
                        <Nav.Link href="#schedule">
                            Schedule
                        </Nav.Link>

                        <Nav.Link href="#assessments">
                            Assessments
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/mylearning">
                            My Learning
                        </Nav.Link>

                        {/* Preserve the dropdown items from master. */}
                        <NavDropdown
                            title="Dropdown"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;