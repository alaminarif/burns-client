import React, { useState } from "react";
import Footer from "../Share/Footer/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Categories from "./Categories";
import Contact from "./Contact";
import MainBanner from "./MainBanner";
import Reviews from "./Reviews";
import NewCategories from "./NewCategories";

const Home = () => {
  return (
    <div className="">
      <MainBanner />
      <Categories />
      <NewCategories />
      <Banner />
      <Reviews />
      <Contact />

      <BusinessSummary />
      <Footer />
    </div>
  );
};

export default Home;
