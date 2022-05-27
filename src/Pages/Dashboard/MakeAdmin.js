import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Share/Loading";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  // const {
  //   data: users,
  //   isLoading,
  //   refetch,
  // } = useQuery("users", () =>
  //   fetch("http://localhost:5000/user", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <Loading></Loading>;

  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
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
              <AdminRow key={user._id} users={users} setUser={setUser} user={user} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
