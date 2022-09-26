import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Share/Loading";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // const []

  // const {
  //   data: categories,
  //   isLoading,
  //   refetch,
  // } = useQuery("categories", () => {
  //   return fetch("https://immense-wave-88332.herokuapp.com/categories").then((res) => res.json());
  // });

  // if (isLoading) {
  //   return <Loading />;
  // }

  useEffect(() => {
    fetch("https://immense-wave-88332.herokuapp.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if (!categories) {
    return <Loading />;
  }
  const coategoryDetails = (id) => {
    navigate(`categories/${id}`);
  };
  return (
    <div className="px-8 mx-auto max-w-7xl">
      <h3 className="text-center text-4xl tracking-widest font-bold uppercase"> PRODUCT CATEGORIES</h3>
      <div className="w-64 mt-4 mx-auto rounded h-1 bg-primary mb-20 "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center fade-up ">
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
