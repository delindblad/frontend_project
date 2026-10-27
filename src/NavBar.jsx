import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faClipboardCheck,
  faComments,
  faHouse,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";

function NavBar() {
  return (
    // Show all links on large screens and a collapsible menu on smaller screens.
    <Navbar expand="lg" className="home-navbar py-3">
      <Container>
        {/* Clicking the platform name returns to the Home page. */}
        <Navbar.Brand as={Link} to="/" className="home-navbar-brand">
          E-learning platform
        </Navbar.Brand>

        {/* Toggle the mobile navigation menu. */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-lg-1">
            {/* Highlight Home only when the URL matches exactly. */}
            <Nav.Link as={NavLink} to="/" end>
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/courses">
              <FontAwesomeIcon icon={faLeanpub} />
              Courses
            </Nav.Link>

            <Nav.Link as={NavLink} to="/schedule">
              <FontAwesomeIcon icon={faRectangleList} />
              Schedule
            </Nav.Link>

            {/* Open the quiz selector and assessments page. */}
            <Nav.Link as={NavLink} to="/assessments">
              <FontAwesomeIcon icon={faClipboardCheck} />
              Assessments
            </Nav.Link>

            <Nav.Link as={NavLink} to="/mylearning">
              <FontAwesomeIcon icon={faUser} />
              My Learning
            </Nav.Link>

            <Nav.Link as={NavLink} to="/messages">
              <FontAwesomeIcon icon={faComments} />
              Messages
            </Nav.Link>

            <Nav.Link as={NavLink} to="/help">
              <FontAwesomeIcon icon={faCircleInfo} />
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;