import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navigation-bar">
        <img
          className="w-12 h-10"
          src="https://www.firststepahead.in/images/FSA_Logo.png"
          alt="navbar-logo"
        />

        <button className="nav-hamburger">
          <FiMenu />
        </button>
        <ul className="navbar-navigation">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link-active navbar-link" : "navbar-link"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="w-32">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link-active navbar-link" : "navbar-link"
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className="w-32">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Courses
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <Link to="/courses/ittraining" className="dropdown-item p-3" type="button">
                    IT Training
                  </Link>
                </li>
                <li>
                  <Link to={"/courses/campustraining"} className="dropdown-item p-3" type="button">
                    Campus Training
                  </Link>
                </li>
                <li>
                  <Link to="/courses/mockinterview" className="dropdown-item p-3" type="button">
                    Mock Interview
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-32">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link-active navbar-link" : "navbar-link"
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://www.firststepahead.in/login.html"
              className="btn-login"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
