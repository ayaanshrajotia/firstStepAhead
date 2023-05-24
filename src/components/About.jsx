import React, { useEffect } from "react";
import "../css/About.css";
import Header from "./Header/Header";
import 'aos/dist/aos.css'
import Aos from "aos";

export default function About() {

    useEffect(()=>{
        Aos.init({duration:1000});
    },[])
    return (
        <>
            <Header image="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg" >
                <h1 className="About">About Us</h1>
                <p className="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aliquam eos ea fugit, temporibus quis repudiandae deserunt quam! Ratione, quia.</p>
            </Header>
            <div className="about">
                <h3>TIME TO GROW YOURSELF</h3>
                <div className="about__content">
                    <div className="about__content-container">
                        <p data-aos="fade-right">
                            We are happy to present First Step as a leading
                            Campus Recruitment Training Institution in Bhopal,
                            focused in meeting the industry skill requirements
                            in this regard, we work closely with Colleges, to
                            add value to their students overall learning and
                            thereby enhancing the Employability of a student.
                            Over the last 4 years over 5000 plus students from
                            Bhopal have benefitted by Campus Recruitment
                            Training to gain a foothold in the industry. The
                            Founder of the Institute has a decade long
                            experience of working closely with corporate and
                            colleges and has helped 17,000 plu students to get
                            offers from leading MNCs.
                        </p>
                        <img src="./images/AboutHero1.png" alt="hero-about" data-aos="fade-left" />
                    </div>
                    <div className="about__content-container">
                        <img src="./images/AboutHero2.png" alt="hero-about" data-aos="fade-right"/>
                        <p data-aos="fade-left">
                            First Step being the Talent Development Corporation
                            we have strengthened our offerings to prepare
                            students to be better equipped in their preferred
                            domain, by imparting the best content by the best
                            faculties through the best learning methodology. We
                            have a team of 50 plus trainers who are industry
                            experts and have a decade long experience in their
                            respective domains. We have a team of 50 plus
                            trainers who are industry experts and have a decade
                            long experience in their respective domains. Some of
                            the highlights of First Step Campus Recruitment
                            trainings are:
                        </p>
                    </div>
                    <div className="about__content-offering">
                        <p data-aos="fade-right">
                            We are offering IT Training and Campus Recruitment
                            Training to help fresher to get dream jobs
                        </p>
                        <div className="about__content-offering-container">
                            <div className="about__content-offering-container-item">
                                <h3>VIRTUAL LEARNING</h3>
                                <p>
                                    Learn from the expert faculty on Aptitude
                                    skills, Spoken English, Reasoning & GD-P!
                                </p>
                            </div>
                            <div className="about__content-offering-container-item">
                                <h3>Technical learning</h3>
                                <p>
                                    Allows students to leran concepts in C, C++,
                                    JAVA, Python, and Emerging Technology.
                                </p>
                            </div>
                            <div className="about__content-offering-container-item">
                                <h3>Online Assesment</h3>
                                <p>Review pogress with regular tests</p>
                            </div>
                            <div className="about__content-offering-container-item">
                                <h3>Lesson on Demand</h3>
                                <p>Company specific workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
