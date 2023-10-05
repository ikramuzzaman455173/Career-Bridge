import React from "react";

const Fresher = () => {
  return (
    <>
      <div className="my-14 text-center">
        <h1 className="text-5xl font-bold mb-5 text-blue-500">Freshers Job</h1>
        <h1 className="text-2xl font-semibold">Start Your Career!</h1>
      </div>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-2 gap-10 ">
        {/* <div className=" rounded-md shadow-md sm:w-96 lg:w-1/2 dark:bg-gray-900 dark:text-gray-100 p-10"> */}
        <div className="flex items-start gap-7 flex-col sm:flex-row md:flex-row lg:flex-row relative bg-cyan-200 ps-8 lg:ps-4 py-10 pe-10 rounded-xl shadow-2xl">
          <div className="sm:mt-2 flex item-center justify-center h-20 w-24 rounded-md p-2">
            <img src="../../../public/logo.png" alt="" />
          </div>
          <div className="flex-col w-full">
            <div
              className="flex justify-between items-center mb-4 "
              data-tip="hello"
            >
              <p className="text-lg">Frontend Developer</p>
              <div className="tooltip" data-tip="Bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current "
                >
                  <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 my-5 flex-wrap ">
              <p className="bg-teal-300 rounded-full px-5 py-1 uppercase text-lg text-black ">
                Hers
              </p>
              <p className="bg-teal-300 rounded-full px-5 py-1 uppercase text-lg text-black ">
                Fresher
              </p>
              <p className="bg-teal-300 rounded-full px-5 py-1 uppercase text-lg text-black ">
                Remote
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 my-4 flex-wrap">
              <p>
                <img
                  className="h-5 w-5"
                  src="../../../public/location-dot-solid.svg"
                  alt="Location"
                />
              </p>
              <p className="text-xl ms-2">San Francisco, California, USA</p>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 my-5 flex-wrap ">
              <p>
                <img
                  className="h-5 w-5"
                  src="../../../public/clock-regular.svg"
                  alt=""
                />
              </p>
              <p className="text-lg">04/05/2023</p>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 flex-wrap ">
              <button
                type="button"
                className="px-6 p-2 font-semibold rounded-3xl duration-[800ms] bg-sky-400 hover:bg-blue-700 hover:text-white dark:text-gray-800 text-lg"
              >
                Apply
              </button>
              <button
                type="button"
                className="px-7 py-3 font-semibold rounded-3xl duration-[800ms] bg-purple-400 hover:bg-teal-400 dark:text-gray-800"
              >
                Job Details
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-7 flex-col sm:flex-row md:flex-row lg:flex-row relative bg-cyan-200 ps-8 lg:ps-4 py-10 pe-10 rounded-xl shadow-2xl">
          <div className="sm:mt-2 flex item-center justify-center h-20 w-24 rounded-md p-2">
            <img src="../../../public/logo.png" alt="" />
          </div>
          <div className="flex-col w-full">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg">Frontend Developer</p>
              <div className="tooltip" data-tip="Bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current "
                >
                  <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 my-5 flex-wrap ">
              <p className="bg-teal-300 rounded-full px-5 py-1 uppercase text-lg text-black ">
                Hers
              </p>
              <p className="bg-teal-300 rounded-full px-5 py-1 uppercase text-lg text-black ">
                Fresher
              </p>
              <p className="bg-teal-300 rounded-full px-5 py-1 uppercase text-lg text-black ">
                Remote
              </p>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 my-4 flex-wrap">
              <p>
                <img
                  className="h-5 w-5"
                  src="../../../public/location-dot-solid.svg"
                  alt="Location"
                />
              </p>
              <p className="text-xl ms-2">San Francisco, California, USA</p>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 my-5 flex-wrap ">
              <p>
                <img
                  className="h-5 w-5"
                  src="../../../public/clock-regular.svg"
                  alt=""
                />
              </p>
              <p className="text-lg">04/05/2023</p>
            </div>
            <div className="flex justify-start items-center gap-4 sm:gap-5 flex-wrap ">
              <button
                type="button"
                className="px-7 p-2 font-semibold rounded-3xl duration-[800ms] bg-sky-400 hover:bg-blue-700 hover:text-white dark:text-gray-800 text-lg"
              >
                Apply
              </button>
              <button
                type="button"
                className="px-7 py-3 font-semibold rounded-3xl duration-[800ms] bg-purple-400 hover:bg-teal-400 dark:text-gray-800"
              >
                Job Details
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* View more button */}
      <div className="text-center pt-20 py-5">
        <button
          type="button"
          className="px-10 py-3 text-xl font-semibold rounded-xl duration-[800ms] bg-cyan-400 hover:bg-purple-600 dark:text-gray-800 hover:text-white"
        >
          View More Jobs
        </button>
      </div>
    </>
  );
};

export default Fresher;


