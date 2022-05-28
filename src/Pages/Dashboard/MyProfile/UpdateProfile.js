import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  console.log(user?.email);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://shielded-falls-95338.herokuapp.com/myprofile?email=${user?.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          toast.success("success added");
        }
      });
    reset();
  };
  return (
    <div className="grid grid-cols-1 justify-items-center py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-items-center gap-6 w-96 bg-base-100 shadow-xl px-8">
        <input className="input input-bordered w-full " placeholder="email" type="email" {...register("email")} />
        <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-full">
          <input className="input input-bordered w-full " placeholder="Education" type="text" {...register("education")} />

          <input className="input input-bordered w-full " placeholder="Number" type="number" {...register("number")} />

          <input className="input input-bordered w-full " placeholder="Address" type="text" {...register("address")} />

          <input className="input input-bordered w-full " placeholder="LinkeIn Link" type="text" {...register("linkein")} />
          <input className="btn btn-primary w-full  mb-6" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
