import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";


const Agentprofile = () => {
  const{user}=useContext(AuthContext);
    return (
      <div>
      <div className="flex flex-row justify-center items-center gap-12 w-[800px] shadow-lg ">
      <h1 className="text-4xl  font-bold text-indigo-950" >Agent Profile</h1>
      <img className="w-16" src="https://i.ibb.co/jVKn2H3/profile-removebg-preview-2.png" alt="" />
      
      </div>

    <div className="flex md:flex-row flex-col md:gap-24 items-center">
    <div className="justify-center flex mt-16 rounded-full">
        <img className="md:w-[400px] md:h-[370px] w-[200px] h-[200px] rounded-full" src='https://i.ibb.co/T8MVxCP/128427807-fashion-logo-with-head-of-young-elegant-girl-female-pretty-face-in-profile-simple-sign-vec.png' alt="" />

      </div>
      <div>
         <h1 className="w-[500px] text-center shadow-lg h-12 mt-16  text-orange-800 font-bold">Rifa</h1>
         <h1 className="w-[500px] text-center shadow-lg h-12 mt-6 font-bold text-orange-800">{user?.email}</h1>
      </div>
         
    </div>
     </div>
    );
};

export default Agentprofile;