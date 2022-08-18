import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <Link to="/" className="uppercase font-medium">
          Home
        </Link>
      </li>

      {/* <li>
        <Link to="/purchase" className="uppercase font-semibold ">
          Purchase
        </Link>
      </li> */}
      <li>
        <Link to="/blogs" className="uppercase font-semibold ">
          blogs
        </Link>
      </li>
      <li>
        <Link to="/myprotfolio" className="uppercase font-semibold ">
          my protfolio
        </Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard" className="uppercase font-semibold ">
            Dashboard
          </Link>
        </li>
      )}
      <li>
        {user ? (
          <button className="btn btn-ghost font-medium" onClick={logout}>
            Signout
          </button>
        ) : (
          <Link to="/signin" className="font-medium">
            Sign in
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="bg-black-rgba lg:text-white">
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
          <Link to="/" className="btn btn-ghost normal-case text-white uppercase text-xl">
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
  );
};

export default Navbar;
