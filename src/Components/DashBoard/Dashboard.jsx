import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";



const Dashboard = () => {
  const{user}=useContext(AuthContext);

    return (
        <div>
     
      <div className="flex flex-row">
        <div className="flex flex-col text-sm font-bold text-white min-h-screen md:w-[20%] w-[40%] bg-gray-800 shadow-lg items-center">
         
         <div>
          <img className="w-52 h-[200px]" src="https://i.ibb.co/ryrhbdV/dash-removebg-preview.png" alt="" />
         </div>
         
          {/* Common Routes */}
          {!(user?.email === 'rifa@gmail.com' || user?.email === 'sa@gmail.com')&&(
           <div>
           <h1 className="mt-4"><h1 className="text-red-700 text-center mt-7 mb-4">User Routes</h1>
             <NavLink to={"/des/wishdata"}>Wishlist</NavLink>
           </h1>
           <h1 className="mt-4">
             <NavLink to={"/des/myP"}>My Profile</NavLink>
           </h1>
           <h1 className="mt-4">
             <NavLink to={"/des/prob"}>Property Bought</NavLink>
           </h1>
           <h1 className="mt-4">
             <NavLink to={"/des/rev/:email"}>My Reviews</NavLink>
           </h1>
         </div>



          )}
          

          {/* Admin Routes */}
          {user?.email === 'sa@gmail.com' && (
            <div>
              <h1 className="text-red-700 text-center mt-7">Admin Routes</h1>
              <h1 className="mt-4">
                <NavLink to={"/des/ad/pro"}>Admin Profile</NavLink>
              </h1>
              <h1 className="mt-4">
                <NavLink to={"/des/userall"}>Manage User</NavLink>
              </h1>
              <h1 className="mt-4">
                <NavLink to={"/des/ad/rev"}>Manage Reviews</NavLink>
              </h1>
              <h1 className="mt-4">
             <NavLink to={"/des/g/allpro"}>Managae all property</NavLink>
           </h1>
            </div>
          )}
         
           
        

          {/* Agent Routes */}
       
          { (user?.email === 'rifa@gmail.com') && (
  <div>
    <h1 className="text-red-700 text-center mt-7">Agent Routes</h1>
    <h1 className="mt-4">
      <NavLink to={"/des/g/pro"}>Agent Profile</NavLink>
    </h1>
    <h1 className="mt-4">
      <NavLink to={"/des/ag/allpro"}>My Added Property</NavLink>
    </h1>
    <h1 className="mt-4">
      <NavLink to={"/des/g/mysold"}>My Sold Property</NavLink>
    </h1>
    <h1 className="mt-4">
      <NavLink to={"/des/ad/req"}>Requested Property</NavLink>
    </h1>
    <h1  className="mt-4">
    <NavLink to={'/des/additem'}>Add Item</NavLink>
    </h1>
    
  </div>
)}
    
          <Link to={"/"}>
            <button className="btn mt-12 bg-pink-800 text-white">Go to Home</button>
          </Link>
        </div>
        <div className="justify-center flex mx-auto items-center">
          <Outlet />
        </div>
      </div>
    </div>
  
    );
};

export default Dashboard;