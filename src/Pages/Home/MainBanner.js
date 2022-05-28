import React from "react";
import mainBannr from "../../Images/banner-o.jpg";

const MainBanner = () => {
  return (
    <div
      style={{
        background: `url(${mainBannr})`,
      }}
      className="h-screen
      bg-no-repeat
      bg-cover
      bg-center  "
    >
      <div className="h-full bg-black-rgba">
        <div className=" h-full bg-neutral-800  flex flex-col justify-center items-center ">
          <h1 className=" text-white text-2xl lg:text-6xl font-semibold uppercase w-6/12 ">best power tools and sales available</h1>
          <p className="text-white text-2xl font-semibold lg:font-bold capitalize w-6/12 my-8 ">
            Magnesium saw arms precisely mounted on bearings: Extremely light and firm with a slender-shaped cutting area for an unobstructed view of
            the work piece
          </p>
          <div className="">
            <button className="btn btn-primary btn-lg mr-4">Explore tools</button>
            <button className="btn btn-primary btn-lg w-48 text-lx">about us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
