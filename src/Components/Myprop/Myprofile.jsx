import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";


const Myprofile = () => {
  const{ user }=useContext(AuthContext)
  console.log(user);

    return (
        <div>
           
            <div className="mt-16 mb-16 flex md:flex-row flex-col justify-center items-center gap-28">
              
               <div>
               <img className="w-[300px] h-[250px] rounded-3xl" src={user?.photoURL} alt="" />
               </div>
                <div className="text-2xl text-blue-900 font-bold ">
               <h1 className="mb-3"> Name:{user?.displayName}</h1>
              <h1>   Email:{user?.email}</h1>
              <h1>Status</h1>
              <button className="text-sm bg-red-900 text-white btn mt-3">Edit Profile</button>
                </div>
            </div>
           
            
        </div>
    );
};

export default Myprofile;