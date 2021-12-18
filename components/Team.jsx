import React from "react";

const Team = () => {
  return (
    <div>
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Professional team
        </p>
        <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
          Meat the best team in wolrd
        </p>
        <div className="flex items-center flex-col md:flex-row justify-center">
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://www.mayureshshitole.site/assets/profile.jpg"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Mayuresh Shitole
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Consultants
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                Mayuresh Shitole studied at Mumbai university has more than
                5years of experience.
              </p>
            </div>
            <div className=" flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-center">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </div>
          </div>
          <div className="p-4">
            <div className="text-center mb-4 opacity-90">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="https://www.mayureshshitole.site/assets/profile.jpg"
                  className="mx-auto object-cover rounded-full h-40 w-40 "
                />
              </a>
            </div>
            <div className="text-center">
              <p className="text-2xl text-gray-800 dark:text-white">
                Mayuresh Shitole
              </p>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                Consultants
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                Mayuresh Shitole studied at Mumbai university has more than
                5years of experience.
              </p>
            </div>
            <div className=" flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-center">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
