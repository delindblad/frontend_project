import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import { currentCourses } from "./data/schedule.js";

// Load these pages only when they are first opened.
// Keep lazy declarations outside App to preserve component identity.
const MyLearning = lazy(() => import("./MyLearning.jsx"));
const Courses = lazy(() => import("./Courses.jsx"));
const Lessons = lazy(() => import("./Lessons.jsx"));
const CourseDetails = lazy(() => import("./CourseDetails.jsx"));
const Schedule = lazy(() => import("./Schedule.jsx"));
const CourseQuiz = lazy(() => import("./quizzes/CourseQuiz.jsx"));
const LessonDetails = lazy(() => import("./LessonDetails.jsx"));
const Assessments = lazy(() => import("./Assessments.jsx"));

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar />

      {/* Display a message while the requested page loads. */}
      <Suspense
        fallback={
          <div className="container py-5" role="status">
            Loading page…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/lessons" element={<Lessons />} />

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

          {/* Display the selected lesson. */}
          <Route
            path="/courses/:courseId/modules/:moduleId/lessons/:lessonId"
            element={<LessonDetails />}
          />

          <Route
            path="/schedule"
            element={<Schedule currentCourses={currentCourses} />}
          />

          <Route
            path="/assessments"
            element={<Assessments />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;