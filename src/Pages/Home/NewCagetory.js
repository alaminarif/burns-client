import React from "react";
import { useNavigate } from "react-router-dom";

const NewCagetory = ({ tool }) => {
  const { _id, name, img, price, minQuantity, avilabeQuantity, description } = tool;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    navigate(`purchase/${id}`);
  };
  return (
    <div className="  shadow-xl text-black rounded-xl border-2 p-2">
      <div className="max-w-[290px] bg-base-100 border-2 rounded-lg ">
        <img src={img} className="rounded-lg max-h-[250px]" alt="" />
      </div>
      <h2 className="text-2xl  text-white  font-semibold my-4 mx-4">{name}</h2>
      {/* <p className="text-justify">{description}</p> */}
      {/* <p className="flex justify-between mt-2 mx-4 text-primary ">
        <span>Minimum Order: {minQuantity}</span> <span>Available: {avilabeQuantity}</span>
      </p>
      <p className="mx-4">Price: ${price}</p> */}
      <button className="btn btn-primary w-full uppercase" onClick={() => handleBuyNow(_id)}>
        buy now
      </button>
    </div>
  );
};

export default NewCagetory;
