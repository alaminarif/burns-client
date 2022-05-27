import React from "react";
import { toast } from "react-toastify";

const AdminRow = ({ user, users, setUser, index }) => {
  const { _id, email, role } = user;
  const handleMakeAdmin = () => {
    const url = `http://localhost:5000/user/admin/${email}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(" succesfully make an admin");
      });
  };

  const handleDelete = (id) => {
    const procced = window.confirm("are you sure?");
    if (procced) {
      const url = `http://localhost:5000/user/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = users.filter((user) => user._id !== id);
          setUser(remaining);
          console.log(data);
        });
    }
  };
  return (
    <tr>
      <th>{index}</th>

      <td>${email}</td>

      <td>
        {" "}
        {role !== "admin" && (
          <button onClick={handleMakeAdmin} className="btn btn-sm btn-primary">
            make admin
          </button>
        )}
      </td>
      <td>
        {" "}
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-primary">
          revome user
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
