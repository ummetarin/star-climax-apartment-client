
import Carddata from "../Cards/Carddata";
import Other from "../Other/Other";
import Otherdata from "../Other/Otherdata";
import Reviewdata from "../Review/Reviewdata";
import Banner from "./Banner";
import Nav from "./Nav";



const Home = () => {
    return (
        <div className="">
            <div className=" text-white mx-auto max-w-screen-xl fixed z-10 bg-black opacity-40">
                <Nav></Nav>
            </div>
       
            <Banner></Banner>
            <Other></Other>
            <Carddata></Carddata>
            <Otherdata></Otherdata>
            <Reviewdata></Reviewdata>
          
        </div>
    );
};

export default Home;