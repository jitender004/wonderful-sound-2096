 


import { BestSeller } from './components/BestSeller/BestSeller';
import "./App.css";

import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Login from "./components/Login & Signup/Login/Login";
import Navbar from "./components/Navbar";


import Login from "./components/Login & Signup/Login/Login";
import PcPerks from "./components/Pc-Perks/PcPerks";


function App() {
  return (
    <div className="App">

   
      {/* <Cart/> */}
      <Checkout/>
      {/* <Navbar/> */}


      <Login
       />

   
      <BestSeller/>
      <PcPerks />


    </div>
  );
}

export default App;
