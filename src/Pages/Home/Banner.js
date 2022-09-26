import React from "react";
import banner from "../../Images/banner.png";

const Banner = () => {
  return (
    <div className="hero py-16">
      <div className=" hero-content flex-col  lg:flex-row-reverse">
        <figure className="max-w-full lg:w-full">
          {" "}
          <img src={banner} className="rounded-lg " alt="" />.
        </figure>
        <div className="">
          <h1 className="text-5xl font-bold uppercase">don't wait for anything. buy it today </h1>
          <p className="py-6 text-2xl">
            To avoid rust attacking your tools, be sure to store them in a dry place. Garages and basements are generally damp.
          </p>
          <button className="btn btn-lg w-64 text-xl btn-primary uppercase">about us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
