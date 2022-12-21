import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import OrderDeletingConfirmation from "../../Components/Modal/OrderDeletingConfirmation";
import Loading from "../../Share/Loading";

const MyOders = () => {
  const [user] = useAuthState(auth);

  const [deletingOder, setDeletingOder] = useState(null);

  const { data: oders, isLoading } = useQuery("myOder", () => {
    const url = `https://hand-tools.onrender.com/oder?email=${user.email}`;
    return fetch(url).then((res) => res.json());
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <h3 className="font-bold text-2xl my-6 text-center"> My Oders</h3>
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
            {oders.map((oder, index) => (
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
                  <label htmlFor="my-oder-delete-modal" onClick={() => setDeletingOder(oder)} class="btn btn-sm btn-primary">
                    Cancel
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOder && <OrderDeletingConfirmation deletingOder={deletingOder} setDeletingOder={setDeletingOder} />}
    </div>
  );
};

export default MyOders;
