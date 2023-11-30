import { useEffect, useState } from "react";
import GiveReviewdata from "./GiveReviewdata";


const Dataforreviewuse = ({id}) => {
    const [data, setdata] = useState([]);
     useEffect(() => {
      fetch(`http://localhost:3000/revdataid/${id}`)
        .then((res) => res.json())
        .then((data) => setdata(data));
    }, [id]);
  
    return (
        <div>
                <div>
         <h1 className="text-3xl text-center font-bold text-orange-950 mb-16">Review Datas Are</h1>
         <div className="grid grid-cols-1 gap-6">
            {
            data.map(item =><GiveReviewdata key={item.Id} data={item}></GiveReviewdata>)
            }
         </div>

            
        </div>
            
        </div>
    );
};

export default Dataforreviewuse;