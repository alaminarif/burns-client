import React from "react";

const ManageAllOrderDeletingConfirmation = ({ deletingOder, setDeletingOrder, refetch }) => {
  console.log(deletingOder);

  const { _id } = deletingOder;

  const handleDelete = () => {
    const url = `https://hand-tools.onrender.com/oder/${_id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          setDeletingOrder(null);
          console.log(data);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="order-deleting-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">are you sure you want to cancel {deletingOder.purchase} ?</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <label htmlFor="order-deleting-modal" class="btn btn-primary ">
              Cancel
            </label>
            <button onClick={handleDelete} className="btn btn-error ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrderDeletingConfirmation;
