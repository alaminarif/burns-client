import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div className="px-12 ">
      <Banner />
      <Tools />
      <BusinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;
