import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile max-w-7xl mx-auto ">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu mr-8 p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard" className="uppercase font-semibold ">
              my profile
            </Link>
          </li>

          {admin ? (
            <>
              <li>
                <Link className="uppercase font-semibold " to="/dashboard/makeadmin">
                  make a admin
                </Link>
              </li>
              <li>
                <Link className="uppercase font-semibold " to="/dashboard/addproduct">
                  Add a product
                </Link>
              </li>

              <li>
                <Link className="uppercase font-semibold " to="/dashboard/manageproduct">
                  Manage Product
                </Link>
              </li>
              <li>
                <Link className="uppercase font-semibold " to="/dashboard/manageallorders">
                  Manage All Orders
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="uppercase font-semibold " to="/dashboard/myoder">
                  My Oders
                </Link>
              </li>
              <li>
                <Link className="uppercase font-semibold " to="/dashboard/review">
                  Add Review
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
