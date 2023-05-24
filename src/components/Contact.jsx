import React from "react";
import "../css/Contact.css";
import Header from "./Header/Header";

export default function Contact() {
    return (
        <>
            <Header image="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg">
                <div className="header__container">
                    <h1>Contact us</h1>
                    {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                    </p> */}
                </div>
            </Header>
            <div className="contact">
                <div className="contact__content-form">
                    <h2>Course Registration Form</h2>
                    <form>
                        <div className="contact__content-form-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="contact__content-form-field">
                            <label htmlFor="college">College</label>
                            <input type="text" name="college" id="college" />
                        </div>
                        <div className="contact__content-form-field">
                            <label htmlFor="branch">Branch</label>
                            <input type="text" name="branch" id="branch" />
                        </div>
                        <div className="contact__content-form-field">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="text" name="mobile" id="mobile" />
                        </div>
                        <div className="contact__content-form-field">
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="contact__content-form-field">
                            <label htmlFor="course">Course</label>
                            <select name="course" id="course">
                                <option value="c">Select Course</option>
                                <option value="c">C</option>
                                <option value="c++">C++</option>
                                <option value="java">Java</option>
                                <option value="python">Python</option>
                            </select>
                        </div>

                        <button type="submit">Submit Form</button>
                    </form>
                </div>

                {/* <div className="contact__content">
                    <div className="contact__content-address">
                        <h3>Find Address</h3>
                        <div className="contact__content-address-field">
                            <img
                                style={{
                                    border: "none",
                                    padding: "none",
                                    width: "30px",
                                    height: "33px",
                                    borderRadius: "0",
                                }}
                                src="./images/icons/register.svg"
                                alt="register-icon"
                            />
                            <p>
                                <span className="field-head">
                                    Registered Office:
                                </span>
                                <br />
                                A-480 /A Mansarovar Colony <br />
                                Shahpura
                                <br />
                                Bhopal - {`[M.P.] 462016`}
                            </p>
                        </div>
                        <div className="contact__content-address-field">
                            <img
                                src="./images/icons/call.svg"
                                alt="register-icon"
                            />
                            <p className="field-head">Mobile:</p>
                            <p>{`(+91) 9993981781`}</p>
                        </div>
                        <div className="contact__content-address-field">
                            <img
                                src="./images/icons/email.svg"
                                alt="register-icon"
                            />
                            <p className="field-head">Email:</p>
                            <p>training.firststep1@gmail.com</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}
