import { useEffect, useState } from "react";
import DataOfWishlist from "./DataOfWishlist";


const Wishlist = () => {
    const [data, setdata] = useState([]);
    
  
    useEffect(() => {
      fetch("http://localhost:3000/wishdata")
        .then((res) => res.json())
        .then((data) => setdata(data));
    }, []);
  

    return (
        <div>
        <div className="flex flex-row items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-blue-950 underline">WISHLIST</h1>
         <img className="w-36" src="https://i.ibb.co/pbyG5d0/wishlist-removebg-preview.png" alt="" />
        </div>
         <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-auto items-center  justify-center md:gap-24 gap-7 md:mt-14">
            {
            data.map(item =><DataOfWishlist   key={item.Id} data={item}></DataOfWishlist>)
            }
         </div>

            
        </div>
    );
};

export default Wishlist;
