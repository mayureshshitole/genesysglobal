import React from "react";
import { GrDocumentVerified } from "react-icons/gr";
import Image from "next/image";
import data from "../data";
//GrDocumentVerified

const AboutUs = () => {
  return (
    <div
      className="pb-16"
      style={{ fontFamily: '"Lato", sans-serif' }}
      id="about"
    >
      {/* Code block starts */}
      <dh-component>
        <section className="max-w-7xl md:max-w-6xl p-2 mx-auto container bg-white py-12">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p
                tabIndex={0}
                className="focus:outline-none uppercase text-sm text-left text-gray-600 "
              >
                Know About us more
              </p>
              <h1
                tabIndex={0}
                className="focus:outline-none text-xl md:text-3xl lg:text-4xl font-semibold text-left md:font-extrabold  leading-relaxed text-gray-800 capitalize pt-4"
              >
                The bunch of knowledged and skilled Career and Immigration Consultants on mission to
                provide Overseas consultancy with most transparent and
                affordable format
              </h1>
            </div>
            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              {data.fourAbout.map((about, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  key={index}
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 p-2 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <Image
                        src={about.img}
                        alt="check"
                        layout="intrinsic"
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                    >
                      {about.title}
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      {about.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </dh-component>
      {/* Code block ends */}
    </div>
  );
};

export default AboutUs;
