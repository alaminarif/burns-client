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
  const [mUsers, mSetUser] = useState([]);
  const [updateUserModal, setUpdateUserModal] = useState(null);
  const navigate = useNavigate();

  const { displayName, email, photoURL } = user;
  console.log(photoURL);
  // const url = `https://immense-wave-88332.herokuapp.com/myprofile/${email}`;
  // const { data: users, isLoading } = useQuery("myProfile", () => fetch(url).then((res) => res.json()));

  // if (isLoading) {
  //   <Loading />;
  // }
  // console.log(users);

  useEffect(() => {
    const url = `https://immense-wave-88332.herokuapp.com/myprofile/${email}`;
    console.log();

    fetch(url)
      .then((res) => res.json())
      .then((data) => mSetUser(data));
  }, []);

  return (
    <div className="">
      <h3 className="font-bold text-2xl"> My Profile</h3>
      <hr className="my-4" />
      <div className="flex flex-col items-center">
        <img className="w-48 rounded-lg border-2 mr-10" src={photoURL ? photoURL : ProfileLogin} alt="" />
        <div className="mt-6">
          <p className="font-bold ">
            <span className="text-xl">Name</span> : {displayName}
          </p>

          <p className="font-bold mt-2">
            {" "}
            <span className="text-xl">Email :</span> {email}
          </p>
          <p className="font-bold  mt-2">
            <span className="text-xl">Education :</span> {mUsers.length ? mUsers[0].education : "not avbileabel"}
          </p>
          <p className="font-bold mt-2">
            {" "}
            <span className="text-xl">Number :</span> {mUsers.length ? mUsers[0].number : "not a number"}
          </p>
          <p className="font-bold mt-2">
            <span className="text-xl">City : </span> {mUsers.length ? mUsers[0].address : "not a address"}
          </p>
          <label htmlFor="update-profile-modal" onClick={setUpdateUserModal} className="btn btn-primary my-4">
            Update Profile
          </label>
        </div>
      </div>
      {updateUserModal && (
        <UpdateProfileModal updateUserModal={updateUserModal} setUpdateUserModal={updateUserModal} mUsers={mUsers} mSetUser={mSetUser} />
      )}
    </div>
  );
};

export default MyProfile;
