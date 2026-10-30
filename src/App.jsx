import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Login from "./Login.jsx";
import Messages from "./Messages.jsx";
import LoggedOut from "./LoggedOut.jsx";
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
    let darkMode = localStorage.getItem('darkMode') === 'true';
    const htmlElement = document.querySelector('html');
    htmlElement.setAttribute('data-bs-theme',
        darkMode ? 'dark' : 'light');
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL} >

         <NavBar />
            <Suspense
                fallback={
                    <div className="container py-5" role="status">
                        Loading page…
                    </div>
                }
            >
            <Routes >

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/courses" element={localStorage.getItem('loggedIn') === 'true' ? <Courses /> : <Login /> } />
                <Route path="/lessons" element={localStorage.getItem('loggedIn') === 'true' ? <Lessons /> : <Login /> } />
                <Route path="/mylearning" element={localStorage.getItem('loggedIn') === 'true' ? <MyLearning /> : <Login /> } />
                <Route
                    path="/courses/:courseId"
                    element={<CourseDetails />}
                />

                {/* Display the quiz associated with the course ID. */}
                <Route
                    path="/courses/:courseId/quiz"
                    element={localStorage.getItem('loggedIn') === 'true' ? <CourseQuiz /> : <Login /> }
                />
                <Route path="/courses/:courseId" element={localStorage.getItem('loggedIn') === 'true' ? <LessonDetails /> : <Login /> } />
                <Route
                    path="/lessons/:courseId/modules/:moduleId/lessons/:lessonId"
                    element={localStorage.getItem('loggedIn') === 'true' ? <Lessons /> : <Login /> }
                />
                <Route
                    path="/schedule"
                    element={localStorage.getItem('loggedIn') === 'true' ? <Schedule currentCourses={currentCourses}  /> : <Login/> }
                />
                <Route
                    path="/assessments"
                    element={localStorage.getItem('loggedIn') === 'true' ? <Assessments  /> : <Login/> }
                />

                <Route path="/messages" element={localStorage.getItem('loggedIn') === 'true' ? <Messages /> : <Login /> } />
                <Route path="/logout" element={localStorage.getItem('loggedIn') === 'true' ? <LoggedOut  /> : <Login /> } />
            </Routes>
            </Suspense>
            <Footer />

        </BrowserRouter>

    );
}



export default App;