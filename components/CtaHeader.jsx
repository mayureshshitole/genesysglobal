import React from "react";
function CtaHead() {
  return (
    <>
      <div className="  py-10  bg-gradient-to-b  from-indigo-500 to-indigo-700 md:h-3/4">
        <div className=" flex justify-center  ">
          <div className="max-w-7xl md:max-w-6xl mx-auto md:py-8 md:px-8  px-5 py-4 xl:px-12 xl:py-16 rounded-3xl ">
            <div>
              <div className="flex  justify-between items-center md:flex-row flex-col-reverse">
                <div className="w-full pb-6  flex-col md:block flex  items-center justify-center md:pt-0 pt-4 ">
                  <h1 className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:w-10/12 text-white font-black  md:text-left text-center ">
                    Never limit your opportunities. Just dream it, Aim it,
                    together lets conquer it
                  </h1>
                  <button className="mt-5 capitalize lg:mt-12 py-3 lg:py-4 px-4  lg:px-6 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90">
                    Join the community
                  </button>
                </div>
                <div className=" w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center mt-8">
                      <div className=" rounded-full shadow-md shadow-indigo-700 animate-bounce">
                        <img className="w-full h-full" src="/programming.svg" />
                      </div>
                      <div className=" rounded-full shadow-md shadow-indigo-700  animate-bounceFirst">
                        <img className="w-full h-full" src="/interview.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaHead;
