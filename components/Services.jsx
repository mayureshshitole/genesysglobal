import React from "react";
import data from "../data";

const Services = () => {
  return (
    <div className="py-16 bg-indigo-500" id="services">
      <div role="contentinfo" className="flex items-center flex-col px-4">
        <p
          tabIndex={0}
          className="focus:outline-none uppercase text-left text-gray-100 font-bold text-xl "
        >
          Our Services
        </p>
      </div>
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8  min-h-8/4 py-10 px-2 h-8/4">
        {data.services.map((service, index) => (
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            key={index}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 h-96 px-4 py-4 bg-white mt-6  shadow-lg shadow-indigo-500 rounded-lg "
          >
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-gray-800">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">
              {service.title}
            </h3>
            <p className="text-md text-left text-gray-500  py-4">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
