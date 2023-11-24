import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


const Mainlayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
         
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Mainlayout;