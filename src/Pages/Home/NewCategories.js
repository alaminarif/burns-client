import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Share/Loading";
import NewCagetory from "./NewCagetory";

const NewCategories = () => {
  // const [tools, setTools] = useState([]);

  // useEffect(() => {
  //   fetch("https://immense-wave-88332.herokuapp.com/purchase")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTools(data);
  //     });
  // }, []);

  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("manageOders", () => {
    return fetch("https://immense-wave-88332.herokuapp.com/purchase").then((res) => res.json());
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="py-4 mx-auto max-w-7xl">
      <h3 className="text-center text-4xl tracking-widest font-bold  mt-20 uppercase">new products</h3>
      <div className="w-48 mt-4 mx-auto rounded h-1 bg-primary mb-12 "></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center  ">
        {tools.map((tool) => (
          <NewCagetory key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default NewCategories;
