import { useEffect, useState } from "react";
import Dataofallproperty from "./Dataofallproperty";


const Agentallproperty = () => {
    const [data, setData] = useState([]);
    


    useEffect(() => {
            fetch('http://localhost:3000/roomdata')
           .then(res => res.json())
           .then(result => {
            setData(result)
           });
           
     }, []);
    return (
        <div>
            <div className="text-5xl  mt-24 text-center text-red-950 font-bold">ALL Property In Appertment </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-auto items-center justify-center md:gap-16 gap-7 md:mt-16">
        {data.map(item => <Dataofallproperty key={item.Id} data={item}></Dataofallproperty>)}
      </div>
            
        </div>
    );
};

export default Agentallproperty;