import React from "react";

const Herosection = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* Container to hold both text and image sections */}
      <div className="flex flex-col lg:flex-row p-5">
        
        {/* Left Section: Text */}
        <div className="left flex flex-col justify-center h-auto lg:w-[60%] text-center lg:text-left">
          <h1 className="text-4xl lg:text-9xl font-bold tracking-tight">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="text-base lg:text-xl font-extralight w-full mt-3 mb-3">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 ">
            <button className="bg-red-500 hover:bg-red-700 p-3 rounded-md text-white m-2">
              Shop Now
            </button>
            <button className="bg-white hover:bg-gray-100 hover:text-orange-500 text-black p-3 rounded-md border-2 border-black m-2">
              Category
            </button>
          </div>

          {/* "Also Available On" section */}
          <p className="mt-6 text-lg">Also Available On</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-3">
            <img
              className="h-18 rounded-md w-24"
              src="https://imgs.search.brave.com/EHbNj2T_einOCg2v18hOFwT6AwFAPuc0gWQ-0yIT2gY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF0Y2h3aXNlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNS9hbWF6b24t/bG9nby0xMDI0eDY4/My5wbmc"
              alt="Logo 1"
            />
            <img
              className="h-18 rounded-md w-24"
              src="https://imgs.search.brave.com/CFNDgJkPM998yDmb2BcnmxzZASwyIsD7sTcrZruESfY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTA2NzMzNTJjZWQ0/ZDAwMDRlYWQ0ZTUu/cG5n"
              alt="Logo 2"
            />
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="img flex justify-center lg:h-[80%] lg:w-[40%] mt-6 lg:mt-0">
          <img
            className="w-full h-auto object-cover rounded-md"
            src="https://imgs.search.brave.com/KUIbnThzA2IpM36WZmady6JfB9Hg_iNU5M0bzbPKIlk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjgx/MDcyLmpwZw"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
