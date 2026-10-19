import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { Navbar, Nav, Button } from 'react-bootstrap';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
          <div>
              <Navbar bg="dark" variant="dark" expand="lg">
                  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Nav className="me-auto"> {/* Updated from 'mr-auto' to 'me-auto' */}
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
              </Navbar>
              <Button variant="primary">Click Me!</Button>
          </div>
      </BrowserRouter>,
  </StrictMode>,
)
