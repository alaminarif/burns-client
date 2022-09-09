import React from "react";
import { toast } from "react-toastify";

const OrderDeletingConfirmation = ({ deletingOder, setDeletingOrder }) => {
  const { _id } = deletingOder;

  const handleDelete = () => {
    const url = `https://immense-wave-88332.herokuapp.com/oder/${_id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setDeletingOrder(null);
          toast.success("Successfully Delete");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="my-oder-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">are you sure you want to delete?</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <label htmlFor="my-oder-delete-modal" class="btn btn-error text-white">
              Cancel
            </label>
            <button onClick={handleDelete} className="btn btn-primary text-white">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeletingConfirmation;
