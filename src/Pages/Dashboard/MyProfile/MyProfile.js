import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import UpdateProfileModal from "../../Components/Modal/UpdateProfileModal";
import Loading from "../../Share/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [mUsers, mSetUser] = useState([]);
  const [updateUserModal, setUpdateUserModal] = useState(null);
  const navigate = useNavigate();

  const { displayName, email } = user;
  console.log(user);
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
  // console.log(mUsers[0].address);

  // if (mUsers.length) {
  //   const { number, address, education } = mUsers[0];
  //   console.log(number, address, education);
  //   console.log("first");
  // }
  // const { number, address, education } = mUsers;
  // console.log(number, address, education);

  return (
    <div className="ml-14 mt-4">
      <h3 className="font-bold text-2xl"> My Profile</h3>
      <hr className="my-4" />
      <p className="font-bold">Name : {displayName}</p>
      <p className="font-bold"></p>
      <p className="font-semibold text-2xl mb-4"> Email: {email}</p>
      <p className="font-bold mt-4">Education: {mUsers.length ? mUsers[0].education : "not avbileabel"}</p>
      <p className="font-bold mt-4">Phone: {mUsers.length ? mUsers[0].number : "not a number"}</p>
      <p className="font-bold mt-4">City: {mUsers.length ? mUsers[0].address : "not a address"}</p>

      <label htmlFor="update-profile-modal" onClick={setUpdateUserModal} className="btn btn-primary my-4">
        Update Profile
      </label>
      {updateUserModal && (
        <UpdateProfileModal updateUserModal={updateUserModal} setUpdateUserModal={updateUserModal} mUsers={mUsers} mSetUser={mSetUser} />
      )}
    </div>
  );
};

export default MyProfile;
