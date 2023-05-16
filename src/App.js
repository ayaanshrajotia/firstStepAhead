import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import all components here
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AllCourses from "./components/AllCourses";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import CampusTraining from "./components/Courses/CampusTraining";
import MockInterview from "./components/Courses/MockInterview";
import ITTraining from "./components/Courses/ITTraining";
import JavaCourse from "./components/Courses/JavaCourse";

function App() {
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/courses" element={<AllCourses />} />
                        <Route
                            exact
                            path="/courses/ittraining"
                            element={<ITTraining />}
                        />
                        <Route
                            exact
                            path="/courses/campustraining"
                            element={<CampusTraining />}
                        />
                        <Route
                            exact
                            path="/courses/mockinterview"
                            element={<MockInterview />}
                        />

                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route
                            exact
                            path="/courses/java-course"
                            element={<JavaCourse />}
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
