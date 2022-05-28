import React from "react";

const Review = ({ review }) => {
  const { img, rating, shortDes, description, name, date } = review;
  return (
    <div className="text-center w-96 bg-base-100 shadow-xl rounded-xl p-8 ">
      <img src={img} className="w-3/12 mx-auto " alt="" />
      <h5 className="my-2">{name}</h5>
      <p className="ratingDate">
        <span className="text-neutral text-2xl">{rating}</span> <i>{date}</i>
      </p>
      <h4 className="font-bold">{shortDes}</h4>

      <span className="">
        <i className="">{description}</i>{" "}
      </span>
    </div>
  );
};

export default Review;
