import React from "react";
import mainBannr from "../../Images/banner-o.jpg";

const MainBanner = () => {
  return (
    <div
      class="hero min-h-screen bg-no-repeat
    bg-cover
    bg-center"
      style={{
        background: `url(${mainBannr})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">best power tools and sales available</h1>
          <p class="mb-5">
            Magnesium saw arms precisely mounted on bearings: Extremely light and firm with a slender-shaped cutting area for an unobstructed view of
            the work piece
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;

// <div
//     style={{
//       background: `url(${mainBannr})`,
//     }}
//     className="h-screen
//     bg-no-repeat
//     bg-cover
//     bg-center  "
//   ></div>
// best power tools and sales available

//   Magnesium saw arms precisely mounted on bearings: Extremely light and firm with a slender-shaped cutting area for an unobstructed view of the work piece
