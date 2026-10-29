import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import platformLogo from "./assets/platform-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faClipboardCheck,
  faHouse,
  faRectangleList,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import { demoUserData } from "./data/user.js";

function NavBar() {
  return (
    // Show all links on large screens and a collapsible menu on smaller screens.
    <Navbar expand="lg" className="home-navbar py-3">
      <Container>
        {/* Clicking the logo or platform name returns to Home. */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="home-navbar-brand d-flex align-items-center gap-2"
        >
          <img
            src={platformLogo}
            alt=""
            className="platform-logo"
          />
          <span>E-learning platform</span>
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

            {/* A teacher and board distinguish Lessons from Courses. */}
            <Nav.Link as={NavLink} to="/lessons">
              <FontAwesomeIcon icon={faChalkboardUser} />
              Lessons
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
              {localStorage.getItem("loggedIn") === "true"
                ? "My Learning(" + demoUserData.full_name + ")"
                : "Sign in!"}
            </Nav.Link>

            {localStorage.getItem("loggedIn") === "true" ? (
              <Nav.Link as={NavLink} to="/logout">
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign out
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;