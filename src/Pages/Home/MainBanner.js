import React from "react";
import mainBannr from "../../Images/main-banner.png";

const MainBanner = () => {
  return (
    // <div className="absolute top-0 w-full">
    //   <div
    //     class="hero min-h-screen  bg-no-repeat
    // bg-cover
    // bg-center"
    //     //     style={{
    //     //       background: `url(${mainBannr})`,
    //     //     }}
    //   >
    //     <div class=" text-slate-200"></div>
    //     <div class="hero-content text-center text-neutral-content">
    //       <div class="max-w-md mt-16 text-slate-100">
    //         <h1 class="mb-5 text-5xl font-bold">best power tools and sales available</h1>
    //         <p class="mb-5">
    //           Magnesium saw arms precisely mounted on bearings: Extremely light and firm with a slender-shaped cutting area for an unobstructed view
    //           of the work piece
    //         </p>
    //         <button class="btn btn-primary">Get Started</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //////////
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={mainBannr} className="max-w-full lg:w-full rounded-lg shadow-2xl " alt="" />
        <div>
          <h1 className="text-5xl font-bold">best hand tools and sales available</h1>
          <p className="py-6 w- mr-6">
            Silica gel packs are excellent for keeping rust away. All you have to do is throw the packs in a drawer or your toolbox.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
