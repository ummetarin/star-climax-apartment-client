import { useEffect, useState } from "react";
import Reviews from "../../Reviews/Reviews";
import Reviwe from "./Reviwe";



const Reviewdata = () => {
  const [rev,setRev]=useState([])
  useEffect(()=>{
    fetch('res.json')
    .then(res=>res.json())
    .then(result=>{
        setRev(result)
        console.log(result);
    })

  },[])
 

    return (
        <div>
            <div className="flex justify-center">
            <img  src="https://i.ibb.co/c39zcR1/feedback-icon-free-vector-removebg-preview.png" alt="" />
            </div>
            <div>
                <h1 className="text-center text-blue-900 text-4xl font-bold underline">Review Section Of Client</h1>
             
            </div>
            <p className="text-center text-xl px-10 font-bold mt-9 text-orange-950">If you have specific reviews or client feedback regarding the apartments mentioned in the dataset, you can share them, and I can help you analyze or discuss them. Alternatively, if you're looking for a generic review template or guidance on creating apartment descriptions that appeal to clients, feel free to provide more details, and I'll do my best to assist you.</p>
           <div className="grid md:grid-cols-2 grid-cols-1 gap-10 justify-center md:mt-24 mb-24">
                {
                    rev.map(item=><Reviwe  key={item.RID} data={item}></Reviwe>)
                }
            </div>
            
        </div>
    );
};

export default Reviewdata;