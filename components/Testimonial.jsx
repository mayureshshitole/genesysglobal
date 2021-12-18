import React from "react";

const Textimonial = () => {
  const testimonials = [
    {
      country: "Canada",
      name: "Tushar Bhat",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "United States",
      name: "Deven Pavar",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "Australia",
      name: "Harish Sharma",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "England",
      name: "Mayuresh Shitole",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "Germany",
      name: "Veena Mehta",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "Ireland",
      name: "Joginder Sahu",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "New Zealand",
      name: "Vishal Patil",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "Canada",
      name: "Manpreet Singh",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
    {
      country: "United States",
      name: "Vishal Patil",
      quote:
        "Genesys Global helped me to fulfill my study dreams. Canada was my dream destination and today even after 5 years Sir is still in contact with me.",
    },
  ];
  return (
    <div className="max-w-7xl  mx-auto py-14 ">
      <div role="contentinfo" className="flex items-center flex-col px-5 mt-12">
        <h1 className="focus:outline-none text-xl md:text-3xl lg:text-4xl font-semibold text-left md:font-extrabold  leading-relaxed text-gray-800 capitalize pt-4">
          Here it From our family!
        </h1>
        <p className="focus:outline-none capitalize text-sm text-left text-gray-600 md:max-w-xl mx-auto">
          We never left hands of any of our clients years after years and
          hundreds of our clients still we are in contact with them and like
          this we grew as a community so that each member who is joining us have
          his/her community in new world to get help.
        </p>
      </div>
      <div className="overflow-x-auto snap-x  scrollbar-hide gap-3 flex p-5 mt-8">
        {testimonials.map((test) => (
          <div className="snap-center max-w-xl  mx-auto rounded-lg bg-white dark:bg-gray-800 shadow shadow-indigo-500 px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
            <div class="w-72 text-center  -mt-12 bg-white rounded-full border-2 border-indigo-500 mx-auto">
              <span class="block relative">
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
              <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                {test.quote}
              </p>
              <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-indigo-500 font-bold text-center">
                {test.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                @{test.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Textimonial;
