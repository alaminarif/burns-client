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
    const url = `http://localhost:5000/myprofile?email=${user?.email}`;
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
          toast.success("success review");
        }
      });
    reset();
  };
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
