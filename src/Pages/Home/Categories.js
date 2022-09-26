import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  // const []
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const coategoryDetails = (id) => {
    navigate(`categories/${id}`);
  };
  return (
    <div className="px-8 mx-auto max-w-7xl">
      <h3 className="text-center text-4xl tracking-widest font-bold uppercase"> PRODUCT CATEGORIES</h3>
      <div className="w-64 mt-4 mx-auto rounded h-1 bg-primary mb-20 "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center ">
        {categories.map((category) => (
          <div onClick={() => coategoryDetails(category._id)} className="max-w-[290px] bg-base-100 shadow-xl text-black  rounded-xl">
            <img src={category.img} alt="" />
            <button className="btn btn-primary w-full">{category.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
