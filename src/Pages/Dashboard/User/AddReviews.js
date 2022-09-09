import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReviews = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://immense-wave-88332.herokuapp.com/myreview/`;
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
          toast.success("success review");
        }
      });
    reset();
  };

  return (
    <div>
      <h3 className="font-bold text-2xl py-6 text-center"> Add A Review</h3>
      <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-96 bg-base-100 shadow-xl px-8 rounded-xl">
          <input className="input input-bordered w-full " placeholder="Name" type="text" {...register("name")} />
          <input className="input input-bordered w-full " placeholder="Rating" type="text" {...register("rating")} />
          <input className="input input-bordered w-full " placeholder="Date" type="date" {...register("date")} />
          <input className="input input-bordered w-full " placeholder="Image Url" type="text" {...register("image")} />
          <input className="input input-bordered w-full " placeholder="Description Heading" type="text" {...register("descriptionHeading")} />
          <input className="input input-bordered w-full " placeholder="Description" type="text" {...register("description")} />
          <input className="btn btn-primary w-full  mb-6" type="submit" value="Add Review" />
        </div>
      </form>
    </div>
  );
};

export default AddReviews;
