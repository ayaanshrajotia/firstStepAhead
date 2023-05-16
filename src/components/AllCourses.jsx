import React from "react";
import Header from "./Header/Header";
import "../css/AllCourses.css";
// import Courses from "./Courses";
import Footer from "./Footer/Footer";
import CourseCard2 from "./CourseCards/CourseCard2";

const CoursesNew = () => {
    return (
        <div className="courses-page">
            <Header image="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-08-free-img.jpg">
                <div className="header__container">
                    <h1 className="courses">All Courses</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </p>
                </div>
            </Header>
            <div className="courses__container">
                <div className="courses-popular">
                    <div className="courses-container">
                        <h4>Course Program</h4>
                        <h1>Popular Courses</h1>
                    </div>
                    <div className="courses-line"></div>
                    <div className="courses-container">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim.
                        </p>
                    </div>
                </div>

                {/* <div className="courses__courses-category">
                    <CourseCard
                        courseName="IT Training"
                        courseDesc="Lorem ipsum dolor sit amet consectetur."
                        courseLink="/courses/ittraining"
                    />
                    <CourseCard
                        courseName="Mock Interview"
                        courseDesc="Lorem ipsum dolor sit amet consectetur."
                        courseLink="/courses/mockinterview"
                    />
                    <CourseCard
                        courseName="Campus Training"
                        courseDesc="Lorem ipsum dolor sit amet consectetur."
                        courseLink="/courses/campustraining"
                    />
                </div> */}
                <div className="courses__cards">
                    <CourseCard2
                        title="IT Training"
                        desc="Lorem ipsum dolor sit amet consectetur.ur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna "
                        link={"/courses/ittraining"}
                    />
                    <CourseCard2
                        title="Mock Interview"
                        desc="Lorem ipsum dolor sit amet consectetur.ur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna "
                        link={"/courses/mockinterview"}
                    />
                    <CourseCard2
                        title="Campus Training"
                        desc="Lorem ipsum dolor sit amet consectetur.ur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna "
                        link={"/courses/campustraining"}
                    />
                </div>

                <section className="home__join_comm-section">
                    <div>
                        <h2>Join our Community</h2>
                        <p>
                            Enter your email address to register to our
                            newsletter subscription delivered on regular basis!
                        </p>
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter your email"
                        />
                        <a href="#">Subscribe</a>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default CoursesNew;
