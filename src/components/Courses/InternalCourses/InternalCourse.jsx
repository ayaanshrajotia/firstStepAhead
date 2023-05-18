import React from "react";
import { useParams } from "react-router-dom";
import courseData from "./data";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import CourseCard2 from "../../CourseCards/CourseCard2";

const InternalCourse = ({ title, link }) => {
    const params = useParams();

    const data = courseData.find((course) => course.title === params.course);

    return (
        <>
            <Header image="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg">
                <div className="header__container">
                    <h1 className="home__heading">{data.name} Course</h1>
                    <p>{data.description}</p>
                </div>
            </Header>
            <div
                className="ittraining"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    padding: "4rem 8rem",
                }}
            >
                {data.sub_courses.map((course) => (
                    <CourseCard2
                        title={course.name}
                        desc={course.description}
                        link={"/courses/ittraining/java-course"}
                    />
                ))}
            </div>

            <Footer />
        </>
    );
};

export default InternalCourse;
