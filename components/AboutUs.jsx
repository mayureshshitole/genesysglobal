import React from "react";
import { GrDocumentVerified } from "react-icons/gr";
import Image from "next/image";
//GrDocumentVerified

const AboutUs = () => {
  return (
    <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
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
                The bunch of knowledged and skilled Consultants on mission to
                provide Overseas consultancy with most transparent and
                affordable format
              </h1>
            </div>
            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
            >
              <div
                tabIndex={0}
                aria-label="card 1"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 p-2 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src={"/documents.svg"}
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
                    Documentation
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    It provides a very simple start, no need to write a lot of
                    code, you just import it and start the primitive components
                    and create the ones you need.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 2"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src={"/people.svg"}
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
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    One on One Consuling
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Modify the visual appearance of your site – including
                    colors, fonts, margins and other style-related properties –
                    with a sophisticated style.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 3"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src={"/flag.svg"}
                      alt="check"
                      layout="intrinsic"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Multiple Countries
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    Instead of just giving you the tools to create your own
                    site, they offer you a list of themes you can choose from.
                    Thus a handy product.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                aria-label="card 4"
                className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
              >
                <div className="w-20 h-20 relative mr-5">
                  <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                  <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                    <Image
                      src={"/checked.svg"}
                      alt="check"
                      layout="intrinsic"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="w-10/12">
                  <h2
                    tabIndex={0}
                    className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                  >
                    Working for everyone
                  </h2>
                  <p
                    tabIndex={0}
                    className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                  >
                    We have chosen the bright color palettes that arouse the
                    only positive emotions. The kit that simply assures to be
                    loved by everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dh-component>
      {/* Code block ends */}
    </div>
  );
};

export default AboutUs;
