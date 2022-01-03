import Image from "next/image";
import Link from "next/link";
import React from "react";
import data from "../data";

const Contactus = () => {
  return (
    <div className=" flex flex-col justify-center items-center" id="contactus">
      <h1 className="text-sm font-semibold capitalize mt-3 text-gray-700">
        {data.headerSection.ctaLine}
      </h1>
      <div className="mt-10 flex px-3 flex-row justify-between mitems-center space-x-4 w-full md:max-w-2xl x">
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
    </div>
  );
};

export default Contactus;
