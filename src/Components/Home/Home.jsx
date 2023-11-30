
import Carddata from "../Cards/Carddata";
import Other from "../Other/Other";
import Otherdata from "../Other/Otherdata";
import Otheresc from "../Other/Otheresc";
import Reviewdata from "../Review/Reviewdata";
import Banner from "./Banner";
import Nav from "./Nav";



const Home = () => {
    return (
        <div className="">
            <div className=" text-white mx-auto max-w-screen-xl md:w-[1600px] w-full  fixed z-10 bg-black opacity-40">
                <Nav></Nav>
            </div>
       
            <Banner></Banner>
            <Other></Other>
            <Otheresc></Otheresc>
            <Carddata></Carddata>
            <Otherdata></Otherdata>
            <Reviewdata></Reviewdata>
          
        </div>
    );
};

export default Home;