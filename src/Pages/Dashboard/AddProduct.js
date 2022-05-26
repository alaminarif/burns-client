import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/purchase`;
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
        if (result.insertedId) {
          toast.success("added success ");
        }
      });
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-full">
          <input className="input input-bordered w-6/12 " placeholder="Product Name" type="text" {...register("name")} />
          <input className="input input-bordered w-6/12 " placeholder="Price" type="number" {...register("price")} />
          <input className="input input-bordered w-6/12 " placeholder="Image Url" type="text" {...register("image")} />
          <input className="input input-bordered w-6/12 " placeholder="Min Quantity" type="number" {...register("minQuantity")} />
          <input className="input input-bordered w-6/12 " placeholder="Avilabe Quantity" type="number" {...register("avilabeQuantity")} />
          <input className="input input-bordered w-6/12 " placeholder="Description" type="text" {...register("description")} />
          <input className="btn btn-primary w-6/12  mb-6" type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
