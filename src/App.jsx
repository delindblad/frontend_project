import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import MyLearning from "./MyLearning.jsx";
import Courses from "./Courses.jsx";
import CourseDetails from "./CourseDetails.jsx";
import NavBar from "./NavBar.jsx";
import Schedule from "./Schedule.jsx";
import CookieModal from "./CookieModal.jsx";
import { schedule } from "./data/schedule.js";
import Footer from "./Footer.jsx";
import { currentCourses } from "./data/schedule.js";

// Display the quiz page for the selected course.
import CourseQuiz from "./quizzes/CourseQuiz.jsx";

// Display an individual lesson within a course module.
import LessonDetails from "./LessonDetails.jsx";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Navigation */}
      {/*<nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/courses">Courses </Link> |{" "}
        <Link to="/mylearning">My Learning</Link>
      </nav>*/}

      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mylearning" element={<MyLearning />} />
        <Route
          path="/courses/:courseId"
          element={<CourseDetails />}
        />

        {/* Display the quiz associated with the course ID. */}
        <Route
          path="/courses/:courseId/quiz"
          element={<CourseQuiz />}
        />

        {/* Display the lesson selected through Start module. */}
        <Route
          path="/courses/:courseId/modules/:moduleId/lessons/:lessonId"
          element={<LessonDetails />}
        />

        <Route
          path="/schedule"
          element={<Schedule currentCourses={currentCourses} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;