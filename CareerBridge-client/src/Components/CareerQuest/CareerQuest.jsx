import React from 'react';

const CareerQuest = () => {
    return (
      <>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h3 class="text-md font-bold text-5xl text-center uppercase text-cyan-700">
            Career Quest
          </h3>
          <h2 class="text-3xl font-semibold text-center mt-6 mb-16 dark:text-secondary">
            Simplify Your Job Search or Hiring Process
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10 mb-20 ">
            <div
              data-aos="fade-right"
              class=" dark:bg-secondary rounded-lg p-6 flex flex-col justify-center items-center text-center aos-init aos-animate bg-cyan-200"
            >
              <div class="flex items-center justify-center w-16 h-16 rounded-full py-5 bg-teal-400 text-secondary mb-4 lg:mb-8">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="w-8 h-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-5 ">
                Unlock Your Hiring Potential
              </h3>
              <p class="text-md leading-relaxed mb-8">
                As an employer, registering on our platform allows you to easily
                post job opportunities from your dashboard. Upon registration,
                you'll be able to manage your job listings, including the
                ability to edit or delete them when needed.
              </p>
              <button
                type="button"
                className="px-7 mb-5 p-2 font-semibold rounded-3xl duration-[800ms] bg-sky-400 hover:bg-blue-700 hover:text-white dark:text-gray-800 text-lg"
              >
                Register Now
              </button>
            </div>
            <div
              data-aos="fade-left"
              class="bg-cyan-200 dark:bg-secondary rounded-lg p-6 flex flex-col justify-center items-center text-center aos-init"
            >
              <div class="flex items-center justify-center w-16 h-16 rounded-full bg-teal-400 text-secondary mb-4 lg:mb-8">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  class="w-8 h-8"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold mb-5 ">
                Land Your Next Career Opportunity
              </h3>
              <p class="text-md leading-relaxed mb-8">
                Job seekers can also register on our platform to apply for job
                openings from their dashboard. You'll be able to view a list of
                your applied jobs and track their status. Once you've applied
                for a job, the apply button will change to indicate that you've
                already applied.
              </p>
              <button
                type="button"
                className="px-7 py-3 font-semibold rounded-3xl duration-[800ms] bg-teal-300 hover:bg-cyan-500 dark:text-gray-800 mb-5"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default CareerQuest;