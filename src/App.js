import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import NotFount from "./Pages/Share/NotFount";
import Signup from "./Pages/Signin/Signup";
import Navbar from "./Pages/Share/Navbar";
import Purchase from "./Pages/Home/NewCategoriesDetails";
import RequireAuth from "./Pages/Signin/RequireAuth";
import Blogs from "./Pages/Blogs/Blogs";
import MyProtfolio from "./Pages/MyProtfolio/MyProtfolio";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOders from "./Pages/Dashboard/User/MyOders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyProfile from "./Pages/Dashboard/Admin/MyProfile";
import AddReviews from "./Pages/Dashboard/User/AddReviews";
import ManageAllOrders from "./Pages/Dashboard/Admin/ManageAllOrders";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";
import ManageProducts from "./Pages/Dashboard/Admin/ManageProducts";
import UpdateProfile from "./Pages/Dashboard/Admin/UpdateProfile";
import ManageUser from "./Pages/Dashboard/Admin/ManageUser";
import RequireAdmin from "./Pages/Signin/RequireAdmin";
import CategoriesDetails from "./Pages/Home/CategoriesDetails";
import SubCategories from "./Pages/Home/SubCategories";

function App() {
  return (
    <div className="bag-color text-slate-200 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="categories/:categoriesID"
          element={
            <RequireAuth>
              <CategoriesDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="sub-categories/:sub-categoriesID"
          element={
            <RequireAuth>
              <SubCategories />
            </RequireAuth>
          }
        ></Route>
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
            path="manage-user"
            element={
              <RequireAdmin>
                <ManageUser />
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
