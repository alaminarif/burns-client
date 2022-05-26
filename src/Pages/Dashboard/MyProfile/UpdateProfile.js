import React from "react";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {};
  return (
    <div>
      <h3>update profile</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-full">
          <input className="input input-bordered w-6/12 " placeholder="Education" type="text" {...register("education")} />
          <input className="input input-bordered w-6/12 " placeholder="Number" type="number" {...register("number")} />

          <input className="input input-bordered w-6/12 " placeholder="Address" type="text" {...register("address")} />

          <input className="input input-bordered w-6/12 " placeholder="LinkeIn Link" type="text" {...register("linkein")} />
          <input className="btn btn-primary w-6/12  mb-6" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
