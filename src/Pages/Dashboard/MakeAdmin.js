import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Share/Loading";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://shielded-falls-95338.herokuapp.com/user", {
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
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>

              <th>user</th>
              <th>role</th>
              <th>revome</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AdminRow key={user._id} users={users} user={user} index={index + 1} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
