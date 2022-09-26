import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://immense-wave-88332.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className=" mx-auto max-w-7xl">
      <h3 className="text-center text-4xl tracking-widest font-bold uppercase">Review</h3>
      <div className="w-24 mt-4 mx-auto rounded h-1 bg-primary mb-20 "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center ">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
