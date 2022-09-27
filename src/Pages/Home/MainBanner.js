import React from "react";
import mainBannr from "../../Images/main-banner.png";

const MainBanner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={mainBannr} className="max-w-full lg:w-full rounded-lg shadow-2xl " alt="" />
        <div>
          <h1 className="text-4xl font-bold uppercase mr-">best hand tools and sales available</h1>
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
