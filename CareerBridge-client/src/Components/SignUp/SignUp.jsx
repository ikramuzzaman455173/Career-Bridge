import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <div className="w-full max-w-md p-4 rounded-md dark-background shadow sm:p-8 text-darkColor dark:text-colorWhite bg-cyan-400">
          <h2 className="mb-3 text-3xl font-semibold text-center font-lightFont dark:font-darkFont">
            Create Account
          </h2>
          <form novalidate="" action="" className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label for="email" className="block text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-lightColor text-colorWhite "
                />
              </div>
              <div className="space-y-2">
                <label for="email" className="block text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@gmail.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-lightColor text-colorWhite"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 "
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full px-8 py-2 font-semibold rounded-md text-xl bg-blue-800 text-white dark:bg-blue-200 dark:text-darkColor"
            >
              SignUp
            </button>
          </form>
          <p className="text text-center text-darColor mt-5">
            Already have an account?
            <Link to="/login">
              <a
                rel="noopener noreferrer"
                className="focus:underline hover:underline ms-1"
              >
                SignIn
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;