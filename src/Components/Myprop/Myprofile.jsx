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
                <div className=" text-blue-900 font-bold ">
              
              <h1 className="w-[400px] h-[100px] bg-pink-300 shadow-lg text-black justify-center flex items-center">  Name:{user?.displayName} </h1>
              <h1 className="w-[400px] h-[100px] mt-4   bg-blue-300 shadow-lg text-black justify-center flex items-center">  Email:{user?.email} </h1>
           
              <h1 className="w-[400px] h-[100px] mt-4  bg-red-300 shadow-lg text-black justify-center flex items-center">  Regular </h1>
               <div className="items-center justify-center mx-auto  flex>">
               <button className="text-sm bg-red-900 w-[400px] text-white btn mt-3 ">Edit Profile</button>
                </div>           
            
                </div>
            </div>
           
            
        </div>
    );
};

export default Myprofile;