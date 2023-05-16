import React from "react";

import "./CourseCard2.css";

import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const CourseCard2 = ({ title, desc, link, image }) => {
    return (
        <div className="course2-card">
            <div className="course2-card__img-container">
                <img
                    src={
                        image
                            ? image
                            : "https://kinsta.com/wp-content/uploads/2023/01/illustration-representing-python-vs-java.png"
                    }
                    alt=""
                />
            </div>
            <div className="course2-card__content">
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link to={link} className="course2-card__btn">
                    <span>See more</span>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard2;
