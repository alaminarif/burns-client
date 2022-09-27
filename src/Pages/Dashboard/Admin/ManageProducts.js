import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import ProductDeletingConfirmation from "../../Components/Modal/ProductDeletingConfirmation";
import Loading from "../../Share/Loading";

const ManageProducts = () => {
  const [user] = useAuthState(auth);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("manageProducts", () => {
    return fetch("https://immense-wave-88332.herokuapp.com/purchase").then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h3 className="font-bold text-2xl py-6 text-center "> Manage Products</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-black">
              <th>No</th>
              <th>Product Name</th>
              <th>price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr className="text-black">
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>${product.price}</td>

                <td>
                  {" "}
                  <label onClick={() => setDeletingProduct(product)} htmlFor="product-deleting-modal" class="btn btn-sm btn-error text-white">
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && <ProductDeletingConfirmation deletingProduct={deletingProduct} setDeletingProduct={setDeletingProduct} refetch={refetch} />}
    </div>
  );
};

export default ManageProducts;
