import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import all components here
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoursesNew from "./components/CoursesNew";
import About from "./components/About";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import ITraining from "./components/Courses/ITraining";
import CampusTraining from "./components/Courses/CampusTraining";
import MockInterview from "./components/Courses/MockInterview";

function App() {
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/courses" element={<CoursesNew />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/itraining" element={<ITraining />} />
                        <Route exact path="/campustraining" element={<CampusTraining />} />
                        <Route exact path="/mockinterview" element={<MockInterview />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
