import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [mUsers, mSetUser] = useState([]);
  const navigate = useNavigate();

  const { displayName, email } = user;
  const handleUpdateprofile = () => {
    const url = `https://shielded-falls-95338.herokuapp.com/myprofile`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => mSetUser(data));
    navigate("/updateprofile");
  };
  return (
    <div className="ml-14 mt-4">
      <h3 className="font-bold text-2xl"> My Profile</h3>
      <hr className="my-4" />
      <p className="font-bold">Name</p>
      <p className="font-semibold text-2xl mb-4"> {displayName}</p>
      <p className="font-bold">Email</p>
      <p className="font-semibold text-2xl mb-4"> {email}</p>
      <p className="font-bold mt-4">Education {}</p>
      <p className="font-bold mt-4">Phone</p>
      <p className="font-bold mt-4">City</p>
      <p className="font-bold mt-4">Linkedin profile</p>

      <button for="myProfile-update" onClick={handleUpdateprofile} className="btn btn-primary my-4">
        Update Profile
      </button>
    </div>
  );
};

export default MyProfile;
