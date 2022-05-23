import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, price, minQuantity, avilabeQuantity, description } = tool;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    navigate(`purchase/${id}`);
  };
  return (
    <div>
      <img src={img} className="rounded-lg" alt="" />
      <h2 className="text-2xl font-semibold mt-4">{name}</h2>
      <p>${price}</p>
      <p className="text-justify">{description}</p>
      <p>{minQuantity}</p>
      <p>{avilabeQuantity}</p>
      <button class="btn btn-primary uppercase mt-4" onClick={() => handleBuyNow(_id)}>
        {" "}
        buy now
      </button>
    </div>
  );
};

export default Tool;
