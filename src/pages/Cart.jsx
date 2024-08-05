import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { useEffect } from "react";
const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);
  useEffect(() => {
       settotalAmount( cart.reduce( (acc,curr ) => acc + curr.price,0));
  }, [cart])
  
  return (
  <div>
{
  cart.length > 0 ? 
  (
    <div className="flex justify-center mt-10 w-[100%] gap-7"> 
          <div className="  max-w-[40%]  p-2  space-y-10 space-x-5" >
                {
                    cart.map ((item,index) => (
                          <CartItem key = {item.id} item = {item} itemIndex = {index}></CartItem>
                    ))
                  }
          </div>
          <div className="flex flex-col justify-between  max-w-[40%] w-[20%]">
                 <div>
                       <div className="uppercase text-green-600 font-semibold">Your Cart</div>
                       <div className="uppercase text-green-600 font-bold text-4xl">Summary</div>
                       <p className="mt-3">
                        <span >Total Items : {cart.length}</span>
                       </p>
                 </div>
                 <div className="flex flex-col gap-4 mb-8 ">
                     <p>Total Amount:  <span className="font-bold">${totalAmount}</span></p>
                     <button className="bg-green-600 w-[100%] rounded-md p-1 text-white font-bold">Checkout Now</button>
                 </div>
          </div>
   
 

    </div>
    ) 
    : 
  (
  <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center ">
      <h1 className="text-2xl">Cart Empty</h1>
      <NavLink to = "/" className="bg-green-600 rounded-md m-2 p-2 text-gray-800 hover:scale-110 transition duration-300 font-semibold text-2xl pl-3 pr-3">
        <button>Shop Now</button>
      </NavLink>
  </div>
  )
}
  </div>
  );
};

export default Cart;
