import React from "react";
import "./CourseCard.css";
import { NavLink } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <div className="course-card">
      <img src="./images/bg.jpg" alt="" className="course-card-img" />
      <div className="course-card__content">
        <h1>{props.courseName}</h1>
        <p>{props.courseDesc}</p>

        
        <NavLink to={props.courseLink}><button className="course-card__button">See more...</button></NavLink>
        {/* <div className="course-card__progress">
          <div className="progress-bar"></div>
          <p className="course-cardProgress">0% Complete</p>
        </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
