import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";

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
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/courses">
              Courses
            </Nav.Link>
                       {/* Replace these placeholders when the pages are ready. */}   
            <Nav.Link as={NavLink} to="/schedule">
              Schedule
            </Nav.Link>

            <Nav.Link as={NavLink} to="/mylearning">
              My Learning
            </Nav.Link>
                                   {/* Preserve the dropdown items from master. */}
 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
