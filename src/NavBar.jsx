import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleInfo, faComments, faHouse, faRectangleList, faRightFromBracket, faUser
} from "@fortawesome/free-solid-svg-icons";
import {faLeanpub} from "@fortawesome/free-brands-svg-icons";
import {demoUserData} from "./data/user.js";
function NavBar() {
  function handleLogout()
  {
    localStorage.setItem('loggedin', false.toString());
  }

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
                       {/* Replace these placeholders when the pages are ready. */}   
            <Nav.Link as={NavLink} to="/schedule">
              <FontAwesomeIcon icon={faRectangleList} />
              Schedule
            </Nav.Link>


            <Nav.Link as={NavLink} to="/mylearning">
              <FontAwesomeIcon icon={faUser} />
              {localStorage.getItem('loggedIn') === 'true' ? 'Signed in(' + demoUserData.full_name + ')': 'Sign in!'}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/messages">
              <FontAwesomeIcon icon={faComments}/>
              Messages
            </Nav.Link>
              {localStorage.getItem('loggedIn') === 'true' ? <Nav.Link as={NavLink} to="/logout">
                <FontAwesomeIcon icon={faRightFromBracket} />
              Sign out
            </Nav.Link> : ''}
                                   {/* Preserve the dropdown items from master. */}
 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
