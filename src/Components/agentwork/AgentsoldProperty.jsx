import { useEffect } from "react";
import { useState } from "react";
import Pro from "../DashBoard/Pro";


const AgentsoldProperty = () => {
  

    const [data, setdata] = useState([]);
    useEffect(() => {
     fetch(`http://localhost:3000/propertydata`)
       .then((res) => res.json())
       .then((data) => setdata(data));
   }, []);
    return (
        <div>
             <div className="grid md:grid-cols-2 grid-cols-1  gap-5">
            {
                data?.map(item=><Pro data={item} key={item.ID}></Pro>)
            }
        </div>
            
        </div>
    );
};

export default AgentsoldProperty;