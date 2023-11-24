import { useEffect, useState } from "react";
import Card from "./Card";


const Carddata = () => {
    const [data, setData] = useState([]);
    const[filter,setFilter]=useState([]);

    useEffect(() => {
            fetch('pub.json')
           .then(res => res.json())
           .then(result => {
            setData(result)
            const absData = result.filter(item => item.Category === "Ads");
            console.log(absData);
            setFilter(absData);
           });
           
     }, []);

  


    return (
        <div className="mt-24 mb-24">
            <div className="flex flex-row justify-center items-center ">
                <h1 className=" text-4xl font-bold  text-blue-800 underline">Advertisement Section</h1>
                <img className="w-36" src="https://i.ibb.co/kh8vVMC/log-removebg-preview.png" alt="" />
            </div>
               <div className="px-10 text-center text-xl  text-red-950 font-bold">
                <p>Welcome to [STAR Climax] Advertisement Showcase! In this specially curated section, we bring you a blend of engaging content and valuable promotions to enhance your experience. Explore a mix of captivating advertisements that highlight the latest offerings, promotions, and updates from our company</p>
               </div>
            
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto items-center  justify-center md:gap-16 gap-7 md:mt-24">
            {
            filter.map(item => <Card  key={item.Id} data={item}></Card>)
            }
         </div>
      
            
        </div>
    );
};

export default Carddata;