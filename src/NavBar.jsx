import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import platformLogo from "./assets/platform-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faClipboardCheck,
  faHouse, faMoon,
  faRectangleList,
  faRightFromBracket, faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import { demoUserData } from "./data/user.js";


function NavBar() {
  let darkMode = localStorage.getItem('darkMode') === 'true';

  function toggleDark() {
    if (localStorage.getItem('darkMode') === 'true') {
      localStorage.setItem('darkMode', 'false');
      window.reload();
    }
    else {
      localStorage.setItem('darkMode', 'true');
      window.reload();

    }
  }

  return (
    // Show a collapsible menu on screens narrower than 1200px.
    <Navbar expand="xl" className="home-navbar py-3">
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

        {/* Toggle the navigation menu on smaller screens. */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-xl-1">
            {/* Highlight Home only when the URL matches exactly. */}
            <Nav.Link as={NavLink} to="/" end>
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/courses">
              <FontAwesomeIcon icon={faLeanpub} />
              <span>Courses</span>
            </Nav.Link>

            {/* A teacher and board distinguish Lessons from Courses. */}
            <Nav.Link as={NavLink} to="/lessons">
              <FontAwesomeIcon icon={faChalkboardUser} />
              <span>Lessons</span>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/schedule">
              <FontAwesomeIcon icon={faRectangleList} />
              <span>Schedule</span>
            </Nav.Link>

            {/* Open the quiz selector and assessments page. */}
            <Nav.Link as={NavLink} to="/assessments">
              <FontAwesomeIcon icon={faClipboardCheck} />
              <span>Assessments</span>
            </Nav.Link>

            <Nav.Link as={NavLink} to="/mylearning">
              <FontAwesomeIcon icon={faUser} />
              <span>
                {localStorage.getItem("loggedIn") === "true"
                  ? "My Learning(" + demoUserData.full_name + ")"
                  : "Sign in!"}
              </span>
            </Nav.Link>
              {localStorage.getItem("loggedIn") === "true" ? (
              <Nav.Link as={NavLink} to="/logout">
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span>Sign out</span>
              </Nav.Link>

            ) : (
              ""
            )}
            <Nav.Link as={NavLink} to="" onClick={toggleDark}>
              {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                  <span></span>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;