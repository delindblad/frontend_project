import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import MyLearning from "./MyLearning.jsx";
import Courses from "./Courses.jsx";
import NavBar from "./NavBar.jsx";
import Schedule from "./Schedule.jsx";





function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            {/* Navigation */}
            {/*<nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/courses">Courses </Link> |{" "}
                <Link to="/mylearning">My Learning</Link>
            </nav>*/}

            {/* Routes */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/mylearning" element={<MyLearning />} />
                <Route path="/mylearning" element={<MyLearning />} />
                <Route path="/schedule" element={<Schedule />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;