import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/bgimage2.jpg')] w-full h-screen bg-fixed overflow-hidden relative">
        <div className="bg-slate-800/60  h-screen flex justify-start ">
          <div className="max-w-7xl p-2 md:max-w-5xl opacity-100 mx-auto flex flex-col justify-start sm:mt-32 mt-8 items-center  relative">
            <h1 className="text-4xl sm:text-5xl font-semibold sm:font-bold text-white">
              We make your overseas dream into reality.
            </h1>
            <h3 className="text-base sm:text-lg sm:font-semibold sm:px-5 text-white">
              Another example that is related to margin collapse is the child
              and parent. Lets suppose the following:Another example that is
              related to margin collapse is the child and parent. Lets suppose
              the following:
            </h3>
            <div className="mt-10 flex px-3 flex-row justify-between mitems-center space-x-4 w-full md:max-w-2xl z-40">
              <div className="cursor-pointer">
                {" "}
                <Link href="https://wa.me/919082939164" passHref>
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
                <Link href="tel:+919082939164" passHref>
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
                <Link href="mailto:contact@genesysglobal.com" passHref>
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
                <Link
                  href="https://www.google.co.in/maps/place/Gateway+Of+India+Mumbai/@18.9219841,72.8324656,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!8m2!3d18.9219841!4d72.8346543"
                  passHref
                >
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
              Get in touch now
            </h1>
          </div>{" "}
        </div>

        <div className="h-40 ">
          <img
            src={"/bgwave.svg"}
            alt="wave"
            className="w-full absolute bottom-0"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
