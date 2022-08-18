import React from "react";
import banner from "../../Images/banerr-2.jpg";

const Banner = () => {
  return (
    <div className="hero py-8">
      <div className=" hero-content flex-col  lg:flex-row-reverse">
        <figure>
          {" "}
          <img src={banner} className="rounded-lg " alt="" />.
        </figure>
        <div className="">
          <h1 className="text-5xl font-bold uppercase">don't wait for anything. buy it today </h1>
          <p className="py-6 text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <button className="btn btn-lg w-64 text-xl btn-primary uppercase">about us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
