import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import Swal from "sweetalert2";


const Nav = () => {

  const {user,LogOut}=useContext(AuthContext)
  const handllogout=()=>{
     LogOut()
     .then(()=>{})
     .catch(err=>console.log(err))
     Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Log Out',
      showConfirmButton: false,
      timer: 1500
    
  
   })
  }

    return (
        <div className="navbar  py-4 shadow-sm  ">
        <div className="flex md:flex-row gap-[100px] max-w-screen-xl  ">
        <div className="">
           <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
             </label>
             <ul tabIndex={0} className="menu menu-sm text-black font-bold opacity-hidden  gap-5 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               <NavLink to={'/'}><li>Home</li></NavLink>
               <NavLink to={'/all'}>  <li>All Product</li></NavLink>
               <NavLink to={'/res'}><li>Register</li></NavLink>
               <details className="dropdown">
                
                    <summary className=""><Link to={'/des'}>Dashboard</Link></summary>
                     <ul className="p-2  text-black font-bold dropdown-content z-[1] opacity-hidden rounded-box w-52">
                    
                      
                     </ul>
               </details>
             </ul>
           </div>
          <div className="md:text-2xl text-xl font-bold flex flex-row md:gap-12 gap-28 items-center">
             <h1 className="text-2xl font-bold md:ml-6">STAR Climax</h1>
             <img className="w-36 h-24" src="https://i.ibb.co/w0Tprzb/apppl-removebg-preview.png" alt="" />
          </div>
         </div>
         <div className=" hidden lg:flex">
           <ul className="menu menu-horizontal px-1 gap-4 text-xl font-bold">
           <NavLink to={'/'}><li>Home</li></NavLink>
           <NavLink to={'/all'}>  <li>All Product</li></NavLink>
             
             <NavLink to={'/res'}><li>Register</li></NavLink>
             <details className="dropdown">
             <summary className=""><Link to={'/des'}>Dashboard</Link></summary>
                     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 text-black font-bold rounded-box w-52">
                     <Link to={'/myP'}><li><a>My Profile</a></li></Link>
                      <li><a>Wishlist</a></li>
                      <li><a>Property bought</a></li>
                      <li><a>My Reviews</a></li>
                     </ul>
               </details>
           </ul>
         </div>
         <div className=" ">
         {
    user?<div className='flex-col'> <div className="flex flex-row">
      <button onClick={handllogout} className="btn bg-base-500 font-bold">LogOut</button> 
    <img className='rounded-full h-12 w-12 md:ml-1 ml-7 md:mt-0 mt-6 ' src={user?.photoURL}></img>
      </div>
      <div>
        <p className="text-sm font-bold">{user?.email}</p>
      </div>
      
      </div>
    :<Link to={'/login'}>  <button className="btn bg-base-500 font-bold">LOGIN</button></Link>
   }
         
         </div>
        </div>
       </div>
    );
};

export default Nav;