import React, { useState } from "react";
import Footer from "../Share/Footer/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import MainBanner from "./MainBanner";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="">
      <MainBanner />

      <div className="max-w-7xl mx-auto">
        {" "}
        <Tools />
        <Banner />
        <Reviews />
        <Contact />
      </div>
      <BusinessSummary />
      <Footer />
    </div>
  );
};

export default Home;
