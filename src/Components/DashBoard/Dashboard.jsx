import { Link, NavLink, Outlet } from "react-router-dom";
import Nav from "../Home/Nav";


const Dashboard = () => {
    return (
        <div >
            {/* <div>
                <Nav></Nav>
            </div> */}
           <div className="flex flex-row">
           <div className="flex flex-col justify-center text-xl font-bold text-white min-h-screen w-[20%] bg-blue-300 shadow-lg items-center  ">
           <h1 className="mt-4">  <NavLink to={'/des/wishdata'}>Wishlist</NavLink></h1>
            <h1 className="mt-4"> <NavLink to={'/des/myP'}>My Profile</NavLink></h1>
            <h1 className="mt-4">  <NavLink to={'/des/prob'}>Property Bought</NavLink></h1>
           <h1 className="mt-4">   <NavLink to={'/des/rev'}>My Reviews</NavLink></h1>
           <Link to={'/'}><button className="btn mt-12 bg-red-800 text-white">Go to Home</button></Link>


             
            </div>
            <div className="justify-center flex mx-auto items-center">
            <Outlet></Outlet>
            </div>
            
           </div>
        </div>
    );
};

export default Dashboard;