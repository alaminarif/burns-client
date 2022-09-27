import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import UpdateProfileModal from "../../Components/Modal/UpdateProfileModal";
import Loading from "../../Share/Loading";
import ProfileLogin from "../../../Images/profile-login.png";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateUserModal, setUpdateUserModal] = useState(null);
  const { displayName, email, photoURL } = user;

  const url = `https://immense-wave-88332.herokuapp.com/myprofile/${email}`;
  const { data: users, isLoading, refetch } = useQuery("myProfile", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <h3 className="font-bold text-2xl"> My Profile</h3>
      <hr className="my-4" />
      <div className="flex flex-col items-center">
        <img src={photoURL ? photoURL : ProfileLogin} className={`w-48 rounded-lg mr-10 ${photoURL ? "border-2" : ""}`} alt="" />
        <div className="mt-6">
          <p className="font-bold ">
            <span className="text-xl">Name</span> : {displayName}
          </p>

          <p className="font-bold mt-2">
            {" "}
            <span className="text-xl">Email :</span> {email}
          </p>
          <p className="font-bold  mt-2">
            <span className="text-xl">Education :</span> {users.length ? users[0].education : "not avbileabel"}
          </p>
          <p className="font-bold mt-2">
            {" "}
            <span className="text-xl">Number :</span> {users.length ? users[0].number : "not a number"}
          </p>
          <p className="font-bold mt-2">
            <span className="text-xl">City : </span> {users.length ? users[0].address : "not a address"}
          </p>
          <label htmlFor="update-profile-modal" onClick={() => setUpdateUserModal({})} className="btn btn-primary my-4">
            Update Profile
          </label>
        </div>
      </div>
      {updateUserModal && (
        <UpdateProfileModal updateUserModal={updateUserModal} setUpdateUserModal={updateUserModal} refetch={refetch} users={users} />
      )}
    </div>
  );
};

export default MyProfile;
