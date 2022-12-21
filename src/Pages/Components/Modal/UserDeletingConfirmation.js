import React from "react";
import { toast } from "react-toastify";

const UserDeletingConfirmation = ({ userDeleting, refetch, setUserDeleting }) => {
  const { email, _id } = userDeleting;
  console.log(userDeleting);

  const handleDelete = () => {
    const url = `https://hand-tools.onrender.com/user/${_id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("delete successfull");
          setUserDeleting(null);
          refetch();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">are you sure you want to delete {email} ?</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <label htmlFor="delete-confirm-modal" class="btn btn-error text-white">
              cancel
            </label>
            <button onClick={handleDelete} className="btn  btn-primary">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeletingConfirmation;
