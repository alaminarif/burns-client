import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReviews = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/myreview/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("success review");
        }
      });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-full">
          <input className="input input-bordered w-6/12 " placeholder="Name" type="text" {...register("name")} />
          <input className="input input-bordered w-6/12 " placeholder="Rating" type="text" {...register("rating")} />
          <input className="input input-bordered w-6/12 " placeholder="Date" type="date" {...register("date")} />
          <input className="input input-bordered w-6/12 " placeholder="Image Url" type="text" {...register("image")} />
          <input className="input input-bordered w-6/12 " placeholder="Description Heading" type="text" {...register("descriptionHeading")} />
          <input className="input input-bordered w-6/12 " placeholder="Description" type="text" {...register("description")} />
          <input className="btn btn-primary w-6/12  mb-6" type="submit" value="Add Review" />
        </div>
      </form>
    </div>
  );
};

export default AddReviews;
