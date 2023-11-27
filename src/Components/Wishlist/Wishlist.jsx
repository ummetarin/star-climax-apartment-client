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
         <h1 className="text-3xl text-center text-orange-950">Wishlist Data</h1>
         <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-auto items-center  justify-center md:gap-24 gap-7 md:mt-14">
            {
            data.map(item =><DataOfWishlist  key={item.Id} data={item}></DataOfWishlist>)
            }
         </div>

            
        </div>
    );
};

export default Wishlist;
