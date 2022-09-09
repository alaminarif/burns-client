import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import ProfileLogin from "../../Images/profile-login.png";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/" className="uppercase font-bold">
          Home
        </Link>
      </li>

      <li>
        <Link to="/blogs" className="uppercase font-bold ">
          blogs
        </Link>
      </li>
      <li>
        <Link to="/myprotfolio" className="uppercase font-bold ">
          my protfolio
        </Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard" className="uppercase font-bold ">
            Dashboard
          </Link>
        </li>
      )}
      {user ? (
        <li>
          <div className="dropdown">
            <label tabIndex={0}>
              <img src={user.photoURL ? user.photoURL : ProfileLogin} className="w-16 rounded-full" alt="" />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow  rounded-box w-52  mt-[200px]">
              <li>
                <Link to="/dashboard" className="uppercase font-bold mx-auto mt-10  ">
                  Dashboard Home
                </Link>
              </li>
              <li>
                <button className="uppercase font-bold mx-auto " onClick={logout}>
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </li>
      ) : (
        <li>
          <Link to="/signin" className=" uppercase  font-bold">
            Sign in
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="sticky z-50 ">
      <div className="">
        <div className="navbar py-6 justify-between max-w-7xl mx-auto ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case  uppercase text-xl">
              BURNS
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div className="navbar-end lg:hidden">
            <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
