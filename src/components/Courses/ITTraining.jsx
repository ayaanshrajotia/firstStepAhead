import React from "react";
import Navbar from "../Header/Navbar";
import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import CourseCard2 from "../CourseCards/CourseCard2";

const ITTraining = () => {
    return (
        <>
            <Header image="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg">
                <div className="header__container">
                    <h1 className="home__heading">IT Training</h1>
                </div>
            </Header>
            <div
                className="ittraining"
                style={{ display: "flex", flexWrap: "wrap" , padding: "4rem 8rem"}}
            >
                <CourseCard2
                    title={"Java "}
                    desc="Some quick example text to build on the car title and make up the bulk of content"
                    image={
                        "https://blob.sololearn.com/assets/introduction-java-cover.png"
                    }
                />
                <CourseCard2
                    title={"DSA "}
                    desc="Some quick example text to build on the car title and make up the bulk of content"
                    image={
                        "https://blob.sololearn.com/assets/introduction-java-cover.png"
                    }
                />
                <CourseCard2
                    title={"Full Stack Development"}
                    desc="Some quick example text to build on the car title and make up the bulk of content"
                    image={
                        "https://blob.sololearn.com/assets/introduction-java-cover.png"
                    }
                />
                <CourseCard2
                    title={"Emerging Tech"}
                    desc="Some quick example text to build on the car title and make up the bulk of content"
                    image={
                        "https://blob.sololearn.com/assets/introduction-java-cover.png"
                    }
                />
                <CourseCard2
                    title={"IT Training"}
                    desc="Some quick example text to build on the car title and make up the bulk of content"
                    image={
                        "https://blob.sololearn.com/assets/introduction-java-cover.png"
                    }
                />
                <CourseCard2
                    title={"C++"}
                    desc="Some quick example text to build on the car title and make up the bulk of content"
                    image={
                        "https://blob.sololearn.com/assets/introduction-java-cover.png"
                    }
                />
            </div>
            {/* <div className="container">
                <div className="row mt-5">
                    <div className="col md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img
                                class="card-img-top"
                                src="images/java.png"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Java Courses</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                    See more...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img
                                class="card-img-top"
                                src="images/dsa.png"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title">DSA Course</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                    See more...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img
                                class="card-img-top"
                                src="images/fullstack.png"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Full Stack Course</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                    See more...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img
                                class="card-img-top"
                                src="images/emergingTch.png"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Emerging Tech Course</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                    See more...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img
                                class="card-img-top"
                                src="images/it-training.png"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title">It-training Course</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                    See more...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4">
                        <div class="card" style={{ width: "18rem" }}>
                            <img
                                class="card-img-top"
                                src="images/cpp.png"
                                alt="Card image cap"
                            />
                            <div class="card-body">
                                <h5 class="card-title">C++ Course</h5>
                                <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a href="#" class="btn btn-primary">
                                    See more...
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </>
    );
};

export default ITTraining;
