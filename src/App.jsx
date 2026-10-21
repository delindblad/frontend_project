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
        <BrowserRouter basename="/">
            {/* Navigation */}
            {/*<nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/courses">Courses </Link> |{" "}
                <Link to="/mylearning">My Learning</Link>
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