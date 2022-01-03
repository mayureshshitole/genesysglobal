import Link from "next/link";
import React from "react";
import data from "../data";

const Team = () => {
  return (
    <div>
      <div className="p-8 bg-white rounded-lg shadow">
        <p className="text-center text-3xl font-bold text-gray-800">
          Professional team
        </p>
        <p className="text-center mb-12 text-xl font-normal text-gray-700 capitalize">
          Meet the best team in the Overseas consultation business.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          {data.coreTeam.map((teams, index) => (
            <div
              className="p-4"
              key={index}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            >
              <div className="text-center mb-4 opacity-90">
                <a href="#" className="block relative">
                  <img
                    alt="profile"
                    src={teams.photo}
                    className="mx-auto object-cover rounded-full h-40 w-40 "
                  />
                </a>
              </div>
              <div className="text-center">
                <p className="text-2xl text-gray-800 ">{teams.name}</p>
                <p className="text-xl text-gray-500  font-light">
                  {teams.designation}
                </p>
                <p className="text-md text-left text-gray-500  max-w-xs py-4 font-light">
                  {teams.info}
                </p>
              </div>
              <div className=" flex border-t border-gray-200 w-44 mx-auto text-gray-600 items-center justify-center">
                <a href="www.linkedin.com">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl hover:text-white transition-colors duration-200"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
