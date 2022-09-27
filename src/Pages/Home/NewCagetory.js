import React from "react";
import { useNavigate } from "react-router-dom";

const NewCagetory = ({ tool }) => {
  const { _id, name, img } = tool;
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

      <button className="btn btn-primary w-full uppercase" onClick={() => handleBuyNow(_id)}>
        buy now
      </button>
    </div>
  );
};

export default NewCagetory;
