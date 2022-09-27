import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";
import ManageAllOrderDeletingConfirmation from "../../Components/Modal/ManageAllOrderDeletingConfirmation";

const ManageAllOrders = () => {
  const [deletingOder, setDeletingOrder] = useState(null);

  const {
    data: oders,
    isLoading,
    refetch,
  } = useQuery("manageOders", () => {
    return fetch("https://immense-wave-88332.herokuapp.com/alloder").then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <h3 className="font-bold text-2xl py-6 text-center">Manage All Orders</h3>
        <table className="table w-full">
          <thead>
            <tr className="text-black">
              <th>No</th>
              <th>Id</th>
              <th>Quantity</th>
              <th>Oder status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {oders?.map((oder, index) => (
              <tr className="text-black">
                <th>{index + 1}</th>
                <td>{oder._id}</td>
                <td>{oder.quantity}</td>
                <td>
                  {" "}
                  <button className="btn btn-sm btn-primary">Paid</button>
                </td>
                <td>
                  {" "}
                  <label onClick={() => setDeletingOrder(oder)} htmlFor="order-deleting-modal" class="btn btn-sm btn-error text-white">
                    cancel
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOder && (
        <ManageAllOrderDeletingConfirmation deletingOder={deletingOder} setDeletingOrder={setDeletingOrder} oders={oders} refetch={refetch} />
      )}
    </div>
  );
};

export default ManageAllOrders;
