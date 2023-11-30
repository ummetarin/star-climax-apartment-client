import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";


const AllCardData = ({data}) => {
const{user}=useContext(AuthContext)
    
    const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};

    return (
        <div className="flex justify-center mx-auto">

       
         <div className="h-[500px] w-[395px] ">
  <div >
    <img className="h-[250px] w-[450px] rounded-lg hover:translate-y-3" src={data.Image} alt="" />
  </div>
  <div className="card-info">
  <p className="text-body  text-amber-950 font-bold ml-3">{data.Proname}</p>
    <p className="text-2xl text-amber-950 font-bold ml-3">{data.Proloc} </p>
   
    <div className="flex flex-row items-center mt-2 mb-2 ">
      <img className="w-16 ml-4" src="https://i.ibb.co/T8MVxCP/128427807-fashion-logo-with-head-of-young-elegant-girl-female-pretty-face-in-profile-simple-sign-vec.png" alt="" />
    <p className="text-sm font-bold mt-2 mb-4 ml-3  text-blue-900">Rifa</p>
    </div>
  </div>
  <div className="card-footer ">
    <span className="text-xl text-amber-600 font-bold">${data.priceto}-{data.priceFr}</span>
    <div className="text-sm text-red-950 font-bold">
    <Link to={`/roomdata/${ID}`}><button className="btn bg-yellow-600 text-white hover:bg-amber-300">Details</button></Link>

    </div>
  </div></div>
        </div>
    );
};

export default AllCardData;