import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-teal-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Job Poster</a>
              </li>
              <li>
                <a>Find Job</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <img
            className="rounded-full ms-2 lg:ms-12 my-1"
            src="../../../public/logo.png"
            alt="Career Logo"
            width={130}
            height={18}
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal bg-none px-5 text-lg ">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Job Poster</a>
            </li>
            <li>
              <a>Find Job</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <a className="btn btn-primary rounded-full px-6 me-3 lg:me-12">
              Login
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
