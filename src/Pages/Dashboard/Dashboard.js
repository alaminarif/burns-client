import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <Outlet />
        {/* <!-- Page content here --> */}
        <label htmlFor="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label htmlFor="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard/myprofile" className="uppercase font-semibold ">
              my profile
            </Link>
          </li>
          <li>
            <Link className="uppercase font-semibold " to="/dashboard">
              My Oders
            </Link>
          </li>

          <li>
            <Link className="uppercase font-semibold " to="/dashboard/review">
              Add Review
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
