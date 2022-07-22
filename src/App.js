 


import { BestSeller } from './components/BestSeller/BestSeller';
import "./App.css";

import Login from "./components/Login & Signup/Login/Login";
import PcPerks from "./components/Pc-Perks/PcPerks";


function App() {
  return (
    <div className="App">

      <Login
       />

   
      <BestSeller/>
      <PcPerks />


    </div>
  );
}

export default App;
