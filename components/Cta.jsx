import React from "react";
import Image from "next/image";

const Cta = () => {
  const countries = [
    { name: "Canada", svglink: "/contries/canada.svg" },
    { name: "United States", svglink: "/contries/united.svg" },
    { name: "Australia", svglink: "/contries/austallia.svg" },
    { name: "England", svglink: "/contries/england.svg" },
    { name: "Germany", svglink: "/contries/germany.svg" },
    { name: "Ireland", svglink: "/contries/ireland.svg" },
    { name: "New Zealand", svglink: "/contries/new.svg" },
  ];
  return (
    <section className="bg-indigo-700 h-3/4 py-5">
      <p className="focus:outline-none capitalize text-lg text-center text-white mt-5">
        Countries Of Your Dream
      </p>
      <div className="overflow-x-auto snap-x  scrollbar-hide gap-3 flex p-5">
        {countries.map((country, index) => (
          <img
            key={index}
            src={`${country.svglink}`}
            alt={`${country.name}`}
            className="snap-center w-72 rounded-lg"
          />
        ))}
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">500</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Students
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">13</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Countries
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">60</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Ongoing Clients
          </p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">12</span>
            <span className="text-indigo-200">+</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
            Years in business
          </p>
        </div>
      </div>
      <div className="w-52 mx-auto mt-4 p-4 flex">
        <button
          type="button"
          className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          Proven Stats
        </button>
      </div>
    </section>
  );
};

export default Cta;
