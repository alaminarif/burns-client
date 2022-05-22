import React from "react";
import banner from "../../Images/banner.jpg";

const Banner = () => {
  return (
    <div class="hero min-h-screen ">
      <div class=" hero-content flex-col  lg:flex-row-reverse">
        <img src={banner} class="max-w-full min-h-fit rounded-lg shadow-2xl" alt="" />.
        <div className="">
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6 text-2xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
            id nisi.
          </p>
          <button class="btn btn-primary uppercase">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
