import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import MyRevewsdata from "../DashBoard/MyRevewsdata";


const AdminReviews = () => {
    const{user}=useContext(AuthContext);

    const [data, setdata] = useState([]);
     useEffect(() => {
      fetch("http://localhost:3000/revdata")
        .then((res) => res.json())
        .then((data) => setdata(data));
    }, []);
    return (
        <div>
                     <div>
         <h1 className="text-3xl text-center font-bold text-orange-950 mb-16">My reviews Are</h1>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {
            data.map(item =><MyRevewsdata  key={item.Id} data={item}></MyRevewsdata>)
            }
         </div>

            
        </div>
          
        </div>
    );
};

export default AdminReviews;