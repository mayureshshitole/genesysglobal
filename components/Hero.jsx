import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../data";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/bgimage2.jpg')]  h-full bg-fixed overflow-hidden relative ">
        <div className="bg-slate-800/70  flex justify-start flex-col  ">
          <div className="max-w-7xl p-2 md:max-w-5xl opacity-100 mx-auto flex flex-col justify-start sm:mt-8 mt-8 items-center  relative">
            <h1 className="text-4xl sm:text-5xl font-semibold sm:font-bold text-white">
              {data.headerSection.titleLine}
            </h1>
            <h3 className="text-base sm:text-lg sm:font-semibold sm:px-5 text-gray-200 mt-2">
              {data.headerSection.smallLine}
            </h3>
            <h3 className="text-lg sm:text-xsl sm:font-semibold sm:px-5 text-white">
              <span className="text-indigo-700 font-bold sm:text-3xl">
                "What do you want to do?"
              </span>{" "}
              Is you need to answer, rest consider it done!
            </h3>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              className="mt-10 flex px-3 flex-row justify-between mitems-center space-x-4 w-full md:max-w-2xl x"
            >
              <div className="cursor-pointer">
                {" "}
                <Link href={`https://wa.me/${data.contact.whatsapp}`} passHref>
                  <Image
                    src={"/wp.svg"}
                    width={50}
                    height={50}
                    layout="intrinsic"
                    alt="whatsapp number"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href={`tel:${data.contact.call}`} passHref>
                  <Image
                    src={"/tl.svg"}
                    width={50}
                    height={50}
                    layout="intrinsic"
                    alt="whatsapp number"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href={`mailto:${data.contact.email}`} passHref>
                  <Image
                    src={"/mail.svg"}
                    width={50}
                    height={50}
                    layout="intrinsic"
                    alt="whatsapp number"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href={`${data.contact.map}`} passHref>
                  <Image
                    src={"/location.svg"}
                    width={50}
                    height={50}
                    layout="intrinsic"
                    alt="whatsapp number"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
            <h1 className="text-sm font-semibold capitalize mt-3 text-white">
              {data.headerSection.ctaLine}
            </h1>
          </div>
          <div className="max-w-7xl mx-auto gap-3 flex sm:flex-row flex-col p-5 mt-8">
            {data.purpose.map((purp, index) => (
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
                key={index}
                className="rounded-lg bg-white  shadow shadow-indigo-500 px-5  py-5 text-gray-800 "
              >
                <div className="object-contain ">
                  <img
                    src={purp.image}
                    alt="background image"
                    className="object-cover w-full rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <p className="text-lg font-semibold text-center">
                    I want To..
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-2xl text-indigo-500 font-bold text-center">
                    {purp.purpose}
                  </p>
                </div>
                <div className="w-full mb-10">
                  <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                    “
                  </div>
                  <p className="text-sm text-center px-5">{purp.quote}</p>
                  <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                    ”
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
