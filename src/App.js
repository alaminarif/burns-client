import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import NotFount from "./Pages/Share/NotFount";
import Signup from "./Pages/Signin/Signup";
import Navbar from "./Pages/Share/Navbar";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Signin/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import MyProtfolio from "./Pages/MyProtfolio/MyProtfolio";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOders from "./Pages/Dashboard/MyOders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import AddReviews from "./Pages/Dashboard/AddReviews";
import ManageAllOrders from "./Pages/Dashboard/ManageAllOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import UpdateProfile from "./Pages/Dashboard/MyProfile/UpdateProfile";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import RequireAdmin from "./Pages/Signin/RequireAdmin";

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/purchase/:purchaseId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/myprotfolio" element={<MyProtfolio />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route path="review" element={<AddReviews />} />
          <Route
            path="manageallorders"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          />
          <Route path="manageproduct" element={<ManageProducts />} />
          <Route path="myoder" element={<MyOders />} />
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route index element={<MyProfile />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
