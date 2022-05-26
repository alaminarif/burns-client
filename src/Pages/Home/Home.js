import React, { useState } from "react";
import Footer from "../Share/Footer/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  const [increase, setIncrease] = useState(1);
  const [decrease, setDecrease] = useState(5);
  const [error, setError] = useState("");
  const [InError, setInError] = useState("");

  const handleIncrease = () => {
    const result = increase + 1;
    let IncraseError;
    if (result < 12) {
      setIncrease(result);
      IncraseError = "";
      setInError(IncraseError);
    } else {
      IncraseError = "Incrase Error";
      setInError(IncraseError);
    }
  };

  const handleDecrease = () => {
    const result = decrease - 1;
    let decreaseError;
    if (result > 0) {
      setDecrease(result);
      decreaseError = "";
      setError(decreaseError);
    } else {
      decreaseError = <p> decrase error</p>;
      setError(decreaseError);
    }
  };

  return (
    <div className="px-12 ">
      <Banner />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <Footer />
      <button onClick={handleIncrease}> +</button>
      <p>
        {increase} {decrease}
      </p>
      <button onClick={handleDecrease}>- </button>
    </div>
  );
};

export default Home;
