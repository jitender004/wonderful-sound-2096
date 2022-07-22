import { BestSeller } from "./components/BestSeller/BestSeller";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Navbar from "./components/Navbar";
import Login from "./components/Login & Signup/Login/Login";
import PcPerks from "./components/Pc-Perks/PcPerks";
import Home from "./pages/Home";

import Consultant from "./components/consulatnt/Consultant";
function App() {
  return (
    <div className="App">
      <Cart/>
      {/* <Navbar/>
      <Consultant/> */}
      {/* <Checkout /> */}
      
      {/* <Login /> */}
      {/* <Home /> */}
   </div>
  );
}

export default App;
