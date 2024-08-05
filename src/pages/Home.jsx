import { useEffect, useState } from "react";
import Product from "../components/Product";
import { DotLoader } from "react-spinners";
const Home = () => {
const API_URL = "https://fakestoreapi.com/products";
const [loading, setloading] = useState(false);
const [posts, setposts] = useState([]);
  async function fetchData() {
    setloading(true);
    try{
         const res =  await fetch(API_URL); 
         const data = await res.json();
         console.log(data);
         setposts(data);
    }
    catch(error){

    }
    setloading(false);
  }
  useEffect(() => {
   fetchData();
  }, [])
  







  return (
  
  <div>
      {
        loading ?
        <div className="flex justify-center items-center w-[100vw] h-[100vh]" >
                  <DotLoader color="rgb(22 163 74 / 1" />
        </div> : posts.length > 0 ?
         (<div className="grid grid-cols-4 p-2 mx-auto space-y-10 space-x-5 md:grid-cols-3 sm:grid-cols-2 card">
        {
          posts.map((post) => (
            <Product  post = {post}></Product>
          ))
        }
        </div>) : (<div className="flex justify-center items-center">Data Not Found</div>)
      }
     
  </div>

  );
};

export default Home;
