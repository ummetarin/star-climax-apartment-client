import { useEffect, useState } from "react";
import AllCardData from "./AllCardData";


const AllCard = () => {
    const [data, setData] = useState([]);
    const[filter,setFilter]=useState([]);

    useEffect(() => {
            fetch('http://localhost:3000/roomdata')
           .then(res => res.json())
           .then(result => {
            setData(result)
            const absData = result.filter(item => item.Status === "Available");
            // console.log(absData);
            setFilter(absData);
           });
           
     }, []);


    return (
        <div>
             <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto items-center  justify-center md:gap-16 gap-7 md:mt-16">
            {
            filter.map(item =><AllCardData  key={item.Id} data={item}></AllCardData>)
            }
         </div>
      
            
        </div>
    );
};

export default AllCard;