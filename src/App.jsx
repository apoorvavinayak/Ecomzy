import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { FaCartPlus } from "react-icons/fa";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
  
    <div>
        <div className="bg-slate-900">
             <Navbar></Navbar>
        </div>
       
        <Routes>
              <Route path ="/" element = {<Home></Home>} ></Route>
              <Route path="/cart" element = {<Cart></Cart>}></Route>
        </Routes>
    </div>

   
  )
};

export default App;
