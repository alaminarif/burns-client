import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOders = () => {
  const [user] = useAuthState(auth);
  const [oders, setOder] = useState([]);
  useEffect(() => {
    const url = `https://shielded-falls-95338.herokuapp.com/oder?email=${user.email}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOder(data));
  }, [user]);
  const handleDelete = (id) => {
    const procced = window.confirm("are you sure?");
    if (procced) {
      const url = `https://shielded-falls-95338.herokuapp.com/oder/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = oders.filter((oder) => oder._id !== id);
          setOder(remaining);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <h3 className="font-bold text-2xl my-6 text-center"> My Oders</h3>
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Quantity</th>
              <th>Oder status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {oders.map((oder, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{oder._id}</td>
                <td>{oder.quantity}</td>
                <td>
                  {" "}
                  <button className="btn btn-sm btn-primary">Paid</button>
                </td>
                <td>
                  {" "}
                  <button onClick={() => handleDelete(oder._id)} className="btn btn-sm btn-primary">
                    cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOders;
