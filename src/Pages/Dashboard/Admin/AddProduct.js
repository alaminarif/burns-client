import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://hand-tools.onrender.com/purchase`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // if (result.insertedId) {
        //   toast.success("added success ");
        // }
      });
    toast.success("added success ");
    reset();
  };
  return (
    <div>
      <h3 className="font-bold text-2xl my-6 text-center">Add A Products</h3>
      <form className="flex justify-center " onSubmit={handleSubmit(onSubmit)}>
        <div className=" card grid grid-cols-1 justify-items-center gap-6 py-6 w-96 bg-base-100 shadow-xl px-8 rounded-xl text-black">
          <input className="input input-bordered  w-full " placeholder="Product Name" type="text" {...register("name")} />
          <input className="input input-bordered w-full " placeholder="Price" type="number" {...register("price")} />
          <input className="input input-bordered w-full " placeholder="Image Url" type="text" {...register("img")} />
          <input className="input input-bordered w-full " placeholder="Min Quantity" type="number" {...register("minQuantity")} />
          <input className="input input-bordered w-full " placeholder="Avilabe Quantity" type="number" {...register("avilabeQuantity")} />
          <input className="input input-bordered w-full " placeholder="Description" type="text" {...register("description")} />
          <input className="btn btn-primary w-full  mb-6" type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
