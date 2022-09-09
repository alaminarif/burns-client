import React from "react";
import { toast } from "react-toastify";

const AdminRow = ({ user, index, refetch, setUserDeleting }) => {
  const { _id, email, role } = user;
  const handleManageUser = () => {
    const procced = window.confirm("are you sure?");
    if (procced) {
      const url = `https://shielded-falls-95338.herokuapp.com/user/admin/${email}`;
      console.log(url);
      fetch(url, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          toast.success(" succesfully make an admin");
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
          <button onClick={handleManageUser} className="btn btn-sm btn-primary">
            make admin
          </button>
        )}
      </td>
      <td>
        {" "}
        <label onClick={() => setUserDeleting(user)} htmlFor="delete-confirm-modal" class="btn text-white btn-sm btn-error ">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default AdminRow;
