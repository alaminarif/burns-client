import React from "react";
import banner from "../../Images/banerr-2.jpg";

const Banner = () => {
  return (
    <div class="hero py-8">
      <div class=" hero-content flex-col  lg:flex-row-reverse">
        <figure>
          {" "}
          <img src={banner} class="rounded-lg " alt="" />.
        </figure>
        <div className="">
          <h1 class="text-5xl font-bold uppercase">don't wait for anything. buy it today </h1>
          <p class="py-6 text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <button class="btn btn-lg w-64 text-xl btn-primary uppercase">about us</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
