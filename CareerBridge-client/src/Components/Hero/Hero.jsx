import React from "react";

const Hero = () => {
  return (
    <section className="dark:bg-gray-800 bg-emerald-100 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-5 gap-5 mx-auto sm:py-8 lg:py-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Welcome <br /> to our
            <span className="dark:text-violet-400 mx-3">Careers </span> Page !
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Explore job opportunities with our company and learn how you can
            join our team.
            <br className="hidden md:inline lg:hidden" />
            Get Your Dream Job Here!!
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-teal-400 dark:bg-violet-400 dark:text-gray-900"
            >
              Suspendisse
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded bg-cyan-400 dark:border-gray-100"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="../../../public/banner-image.jpg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;