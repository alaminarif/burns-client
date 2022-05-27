import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [oders, setOder] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/alloder";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setOder(data));
  }, []);
  const handleDelete = (id) => {
    const procced = window.confirm("are you sure?");
    if (procced) {
      const url = `http://localhost:5000/oder/${id}`;
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
      <div class="overflow-x-auto">
        <h3 className="font-bold text-2xl py-6 text-center">Manage All Orders</h3>
        <table class="table w-full">
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

export default ManageAllOrders;
