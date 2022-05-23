import React from "react";

const Review = ({ review }) => {
  const { img, rating, shortDes, description, name, date } = review;
  return (
    <div className="text-center">
      <img src={img} className="w-3/12 mx-auto " alt="" />
      <h5 className="my-2">{name}</h5>
      <p className="ratingDate">
        <span className="text-neutral text-2xl">{rating}</span> <i>{date}</i>
      </p>
      <h4>{shortDes}</h4>

      <span className="text-primary">
        <i className="text-accent">{description}</i> more...
      </span>
    </div>
  );
};

export default Review;
