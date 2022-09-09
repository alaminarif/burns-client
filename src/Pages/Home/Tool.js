import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, price, minQuantity, avilabeQuantity, description } = tool;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    navigate(`purchase/${id}`);
  };
  return (
    <div className="w-96 bg-base-100 shadow-xl  p-8 rounded-xl">
      <img src={img} className="rounded-lg" alt="" />
      <h2 className="text-2xl font-semibold mt-4">{name}</h2>
      <p className="text-justify">{description}</p>
      <p className="flex justify-between mt-2 text-primary ">
        <span>Minimum Order: {minQuantity}</span> <span>Available: {avilabeQuantity}</span>
      </p>
      <p>Price: ${price}</p>
      <button className="btn btn-primary w-full uppercase mt-4" onClick={() => handleBuyNow(_id)}>
        {" "}
        buy now
      </button>
    </div>
  );
};

export default Tool;
