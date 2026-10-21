import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">E-learning platform</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nav-navbar" />
        <Navbar.Collapse id="basic-nav-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link href="#lessons">Lessons</Nav.Link>
            <Nav.Link href="#schedule">Schedule</Nav.Link>
            <Nav.Link href="#assessments">Assessments</Nav.Link>
            <Nav.Link as={Link} to="/mylearning">My Learning</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;