import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
