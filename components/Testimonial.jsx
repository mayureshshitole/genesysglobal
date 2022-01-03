import React from "react";
import data from "../data";

const Textimonial = () => {
  return (
    <div className="max-w-7xl  mx-auto py-14 ">
      <div className="flex items-center flex-col px-5 mt-12">
        <h1 className="focus:outline-none text-xl md:text-3xl lg:text-4xl font-semibold text-left md:font-extrabold  leading-relaxed text-gray-800 capitalize pt-4">
          Hear it From our family!
        </h1>
        <p className="focus:outline-none capitalize text-sm text-left text-gray-600 md:max-w-3xl mx-auto">
          We never left hands of any of our clients years after years and
          hundreds of our clients still we are in contact with them and like
          this we grew as a community so that each member who is joining us have
          his/her community in new world to get help.
        </p>
      </div>
      <div className="overflow-x-auto snap-x  scrollbar-hide gap-3 flex p-5 mt-8">
        {data.testimonials.map((test, index) => (
          <div
            key={index}
            className="snap-center max-w-xl  mx-auto rounded-lg bg-white shadow shadow-indigo-500 px-5 pt-5 pb-10 text-gray-800 "
          >
            <div className="w-72 text-center  -mt-12 bg-white rounded-full border-2 border-indigo-500 mx-auto">
              <span className="block relative">
                <img
                  alt="profile"
                  src="/dp.svg"
                  className="mx-auto object-cover rounded-full h-20 w-20 "
                />
              </span>
            </div>
            <div className="w-full mb-10">
              <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-sm  text-center px-5">{test.quote}</p>
              <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-indigo-500 font-bold text-center">
                {test.name}
              </p>
              <p className="text-xs text-gray-500 text-center">
                @{test.country}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="video-responsive flex flex-col md:flex-row gap-3 p-2">
        {data.videoTesti.map((video, index) => (
          <iframe
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="w-full h-60 sm:h-96"
            src={`https://www.youtube.com/embed/${video.embedID}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        ))}
      </div>
    </div>
  );
};

export default Textimonial;
