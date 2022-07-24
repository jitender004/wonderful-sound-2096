import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./../components/Login & Signup/Login/Login";
import Signup from "./../components/Login & Signup/Signup/Signup";
import { AllProducts } from "../components/AllProducts/AllProducts";
import Cart from "./../components/cart/Cart";
import Checkout from "./../components/cart/Checkout";
import ReqAuth from "./../ReqAuth/ReqAuth";
import OurStory from "./../components/OurStory";
import Error from "./Error";
import AccountDetails from "./AccountDetails";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/allproducts" element={<AllProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <ReqAuth>
            <Checkout />
          </ReqAuth>
        }
      />
      <Route path="/ourstory" element={<OurStory />} />
      <Route
        path="accountdetails"
        element={
          <ReqAuth>
            <AccountDetails />{" "}
          </ReqAuth>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default MainRoute;
