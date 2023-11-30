import { useEffect } from "react";
import { useState } from "react";
import Pro from "./Pro";
import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";


const Propertyb = () => {
    const{user}=useContext(AuthContext);

    const [data, setdata] = useState([]);
    useEffect(() => {
     fetch(`http://localhost:3000/property/${user?.email}`)
       .then((res) => res.json())
       .then((data) => setdata(data));
   }, [user]);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1  gap-5">
            {
                data?.map(item=><Pro data={item} key={item.ID}></Pro>)
            }
        </div>
    );
};

export default Propertyb;