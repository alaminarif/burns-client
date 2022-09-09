import React from "react";
import { toast } from "react-toastify";

const ProductDeletingConfirmation = ({ deletingProduct, setDeletingProduct, refetch }) => {
  const { name, _id } = deletingProduct;

  const handleDelete = () => {
    const url = `https://shielded-falls-95338.herokuapp.com/purchase/${_id}`;

    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          setDeletingProduct(null);
          toast.success("Delete Successfull");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="product-deleting-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">are you sure you want to delete ${name} ?</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <label htmlFor="product-deleting-modal" class="btn btn-error text-white">
              Cancel
            </label>
            <button onClick={handleDelete} className="btn btn-primary ">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeletingConfirmation;
