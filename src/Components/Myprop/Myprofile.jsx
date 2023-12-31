import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";


const Myprofile = () => {
  const{ user }=useContext(AuthContext)
  console.log(user);

    return (
      <div>
      <div className="flex flex-row justify-center items-center gap-12 w-[800px] shadow-lg ">
      <h1 className="text-4xl  font-bold text-indigo-950" >User Profile</h1>
      <img className="w-16" src="https://i.ibb.co/jVKn2H3/profile-removebg-preview-2.png" alt="" />
      
      </div>

    <div className="flex md:flex-row flex-col gap-24">
    <div className="justify-center flex mt-16 rounded-full">
        <img className="w-[100px] h-[100px] rounded-full" src={user?.photoURL} alt="" />

      </div>
      <div>
         <h1 className="w-[500px] text-center shadow-lg h-12 mt-16  text-orange-800 font-bold">{user?.displayName}</h1>
         <h1 className="w-[500px] text-center shadow-lg h-12 mt-6 font-bold text-orange-800">{user?.email}</h1>
      </div>
         
    </div>
     </div>
    );
};

export default Myprofile;
