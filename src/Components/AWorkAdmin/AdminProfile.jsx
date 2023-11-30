import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";


const AdminProfile = () => {

  const{user}=useContext(AuthContext);
    return (
        <div>
        <div className="flex flex-row justify-center items-center gap-12 w-[800px] shadow-lg ">
        <h1 className="text-4xl  font-bold text-indigo-950" >Admin Profile</h1>
        <img className="w-16" src="https://i.ibb.co/jVKn2H3/profile-removebg-preview-2.png" alt="" />
        
        </div>

      <div className="flex md:flex-row flex-col gap-24 items-center">
      <div className="justify-center flex  rounded-full">
          <img className="w-[300px] h-[400px] rounded-full" src='https://i.ibb.co/2g1qxXR/403395981-338609755550225-6451764726038807786-n-removebg-preview.png' alt="" />

        </div>
        <div className="">
           <h1 className="w-[500px] text-center  shadow-lg h-12 mt-16  text-orange-800 font-bold">Tarin</h1>
           <h1 className="w-[500px] text-center shadow-lg h-12 mt-6 font-bold text-orange-800">{user?.email}</h1>
        </div>
           
      </div>
       </div>
    );
};

export default AdminProfile;