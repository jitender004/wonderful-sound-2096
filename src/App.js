import { BestSeller } from "./components/BestSeller/BestSeller";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Navbar from "./components/Navbar";
import Login from "./components/Login & Signup/Login/Login";
import PcPerks from "./components/Pc-Perks/PcPerks";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      {/* <Cart/> */}
      {/* <Checkout /> */}
      {/* <Navbar/> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <BestSeller /> */}
      <PcPerks />
    </div>
  );
}

export default App;
