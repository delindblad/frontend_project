import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import MyLearning from "./MyLearning.jsx";
import Courses from "./Courses.jsx";
import CourseDetails from './CourseDetails.jsx';
import NavBar from "./NavBar.jsx";
import Schedule from "./Schedule.jsx";
import LessonDetails from "./LessonDetails.jsx";

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
  
              {/* Routes */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/mylearning" element={<MyLearning />} />
                <Route path="/courses/:courseId" element={<CourseDetails />} />
                <Route path="/courses/:courseId/modules/:moduleId/lessons/:lessonId" element={<LessonDetails />} />
                <Route path="/schedule" element={<Schedule />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;