import React from "react";
import Footer from "../Share/Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
