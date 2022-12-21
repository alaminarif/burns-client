import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const UpdateProfileModal = ({ refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    const url = `https://hand-tools.onrender.com/update-profile/${user.email}`;
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
        if (result.modifiedCount) {
          toast.success("success added");
          refetch();
        }
      });
    reset();
  };
  return (
    <div>
      <input type="checkbox" id="update-profile-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle shadow-xl">
        <div className="modal-box relative">
          <label htmlFor="update-profile-modal" class="btn btn-sm btn-circle bg-transparent absolute right-2 top-2">
            ✕
          </label>
          <div className="grid grid-cols-1 justify-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-items-center gap-6 w-96 bg-base-100  text-black ">
              <input
                className="input input-bordered w-full mt-6 "
                placeholder="email"
                type="email"
                value={user?.email}
                readOnly
                {...register("email")}
              />
              <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-full">
                <input className="input input-bordered w-full " placeholder="Education" type="text" {...register("education")} />

                <input className="input input-bordered w-full " placeholder="Number" type="number" {...register("number")} />

                <input className="input input-bordered w-full " placeholder="Address" type="text" {...register("address")} />

                <input className="btn btn-primary w-full" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
