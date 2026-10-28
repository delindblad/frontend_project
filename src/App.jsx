import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import MyLearning from "./MyLearning.jsx";
import Courses from "./Courses.jsx";
import CourseDetails from './CourseDetails.jsx';
import NavBar from "./NavBar.jsx";
import Schedule from "./Schedule.jsx";
import CookieModal from "./CookieModal.jsx";
import Footer from "./Footer.jsx";
import Login from "./Login.jsx";
import Messages from "./Messages.jsx";
import LoggedOut from "./LoggedOut.jsx";
import {currentCourses} from "./data/schedule.js";
import LoginComponent from "./LoginComponent.jsx";





function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
         <NavBar />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/courses" element={localStorage.getItem('loggedIn') === 'true' ? <Courses /> : <Login /> } />
                <Route path="/mylearning" element={localStorage.getItem('loggedIn') === 'true' ? <MyLearning /> : <Login /> } />
                <Route path="/courses/:courseId" element={localStorage.getItem('loggedIn') === 'true' ? <CourseDetails /> : <Login /> } />
                <Route path="/schedule" element={localStorage.getItem('loggedIn') === 'true' ? <Schedule currentCourses={currentCourses}  /> : <Login /> } />
                <Route path="/messages" element={localStorage.getItem('loggedIn') === 'true' ? <Messages /> : <Login /> } />
                <Route path="/logout" element={localStorage.getItem('loggedIn') === 'true' ? <LoggedOut  /> : <Login /> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}



export default App;