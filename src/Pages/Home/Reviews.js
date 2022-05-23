import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className="">
      <h3 className="text-center text-5xl font-bold mb-12 my-8 uppercase">Review</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
