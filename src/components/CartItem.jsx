import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";
const CartItem = ({item, key}) => {
  const dispatch = useDispatch();
  function removeHandler(){
    dispatch(remove(item.id))
    toast.success("Item Removed")
  }
  const description = item.description.split(" ").slice(0,15).join(" ") + "...";
  return (
    <div className="border-b-2 border-gray-300">
           <div className="flex gap-6 mb-4 ">
                <div className="h-[150px]">
                  <img src={item.image} className="h-full w-full"></img>
                   
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-gray-700 font-semibold text-left     mt-1">{item.title}</h1>
                  <h1 className=" text-gray-400 font-normal text-[12px] text-left w-67">{description}</h1>
                  <div className="flex justify-between">
                    <p className="text-green-600 font-semibold   ">${item.price}</p>
                    <div onClick={removeHandler} className=" bg-red-100 rounded-full w-[50px] flex justify-center items-center p-2 hover:scale-110 transition duration-300 cursor-pointer">
                       <MdOutlineDeleteOutline className=" text-red-700 text-2xl " />

                    </div>
                  </div>
                </div>
           </div>
    </div>
    );
};

export default CartItem;
