import { BestSeller } from "./components/BestSeller/BestSeller";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Navbar from "./components/Navbar";
import Login from "./components/Login & Signup/Login/Login";
import PcPerks from "./components/Pc-Perks/PcPerks";

import Home from "./pages/Home";

import { AllProducts } from "./components/AllProducts/AllProducts";


import Consultant from "./components/consulatnt/Consultant";


function App() {
  return (
    <div className="App">
      <Login />
      {/* <Cart/> */}
      {/* <Checkout /> */}

      {/* <Navbar/> */}
      {/* <Login /> */}
      {/* <Home /> */}

      <PcPerks />

      <AllProducts/>


    </div>

  );
}

export default App;
