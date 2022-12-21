import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useQuery } from "react-query";
import UserDeletingConfirmation from "../../Components/Modal/UserDeletingConfirmation";
import Loading from "../../Share/Loading";
import AdminRow from "./AdminRow";

const ManageUser = () => {
  const [userDeleting, setUserDeleting] = useState(null);
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://hand-tools.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="font-bold text-2xl my-6 text-center">Make Admin</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-black">
              <th>No</th>

              <th>user</th>
              <th>role</th>
              <th>revome</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AdminRow key={user._id} users={users} user={user} index={index + 1} setUserDeleting={setUserDeleting} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
      {userDeleting && <UserDeletingConfirmation refetch={refetch} userDeleting={userDeleting} setUserDeleting={setUserDeleting} />}
    </div>
  );
};

export default ManageUser;
