import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-hot-toast";
import { add } from "../redux/Slices/CartSlice";
import { remove } from "../redux/Slices/CartSlice";
const Product = ({post}) => {
  
  const {cart} = useSelector( (state) => state);
  const dispath = useDispatch();
  function AddHandler(){
    dispath(add(post));
    toast.success("Item Added to Cart");
  }
  function removeHandler(){
    dispath(remove(post.id));
    toast.success("Item removed from Cart");
  }
  const description = post.description.split(" ").slice(0,10).join(" ") + "...";
  
 // console.log(post.title);
  return (
<div className="  flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]  gap-3  mt-10 ml-5 rounded-xl outline outline-gray-200  ">
      <div className="text-gray-700 font-semibold text-left truncate  w-40 mt-1">
      <p>{post.title.substr(0,15) + "..."}</p>
 </div>
 <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
     <p>{description}</p>
 </div>
 <div className="h-[100px]">
       <img src={post.image} className=" h-full w-full" ></img>
 </div>
 <div className="flex  gap-12 items-center btn-price  ">
        <div className="flex    mt-5 " >
            <p className="text-green-600 font-semibold   ">${post.price}</p>
        </div>
        
              {
                  cart.some((p) => p.id == post.id) ? (<button onClick={removeHandler} className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700  hover:text-white transition duration-300 ease-in w-[120px] h-[30px] relative -bottom-1  btn    ">Remove Item</button>) : (<button onClick={AddHandler} className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in w-[120px] h-[30px] relative -bottom-1 btn ">Add to Cart</button>)
              }
 </div>
 
 
 </div>
  )
}

export default Product;
