import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import NotFount from "./Pages/Share/NotFount";
import Signup from "./Pages/Signin/Signup";
import Navbar from "./Pages/Share/Navbar";
import Footer from "./Pages/Share/Footer/Footer";

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
// '0091bca339ce3f9e92c9b7615e5a48381911af7ec8b38625f9500b779223650125b0c91da7f621d026793b67dc207b69'