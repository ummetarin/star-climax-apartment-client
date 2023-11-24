import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navbar  py-4 shadow-sm  ">
        <div className="flex md:flex-row gap-[200px] max-w-screen-xl  ">
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
                    <summary className="">Dashboard</summary>
                     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li><a>My Profile</a></li>
                      <li><a>Wishlist</a></li>
                      <li><a>Property bought</a></li>
                      <li><a>My Reviews</a></li>
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
                    <summary className="">Dashboard</summary>
                     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                     <li><a>My Profile</a></li>
                      <li><a>Wishlist</a></li>
                      <li><a>Property bought</a></li>
                      <li><a>My Reviews</a></li>
                     </ul>
               </details>
           </ul>
         </div>
         <div className=" ">
        <NavLink to={'/login'}> <button className="btn text-xl ">Login</button></NavLink>
         
         </div>
        </div>
       </div>
    );
};

export default Nav;