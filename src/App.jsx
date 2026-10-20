import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import MyLearning from "./MyLearning.jsx";
import Courses from "./Courses.jsx";



function About() {
    return <h1>About Page</h1>;
}

function Contact() {
    return <h1>Contact Page</h1>;
}

function App() {
    return (
        <BrowserRouter>
            {/* Navigation */}
           {/* <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </nav>*/}

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/mylearning" element={<MyLearning />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;