import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Home/Nav";
import GiveRev from "../GiveReview/GiveRev";
import Dataforreviewuse from "../GiveReview/Dataforreviewuse";


const Details = () => {
    const data=useLoaderData();
    console.log(data);
    const{Proname,Proloc,_id,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};


   

    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            <h1 className="mt-8 mb-8 font-bold items-center text-3xl text-red-950">{data.Protitle}</h1>
        
          <div className="flex md:flex-row flex-col font-bold  md:gap-8 mb-24 ">
          <div>
                <img className="w-[700px] h-[500px] rounded-lg" src={data.Image} alt="" />
            </div>
            <div className="">
                <h1  className="text-2xl text-pink-800  md:mt-12">The Room number is {data.ID}</h1>
               <h1 className="text-4xl text-indigo-950  md:mt-5">{data.Proname}</h1>
               <p className="text-2xl text-blue-800 mt-4"><span>$</span>{data.priceto}-{data.priceFr}</p>
               <p className="text-sm text-indigo-950 mt-4 ">{data.Des}</p>
               <p className="text-4xl t text-yellow-950 mt-4">{data.Agentname}</p>
              <Link to={`/bookdata/${data.ID}`}> <button  className="btn bg-rose-800 text-white mt-6">Add To  Wishlist</button></Link>
            </div>
          </div>
          <div>
          <div className="flex flex-row justify-center ">
                <h1 className=" text-4xl font-bold  text-pink-900 ">Give Review About Our Appertment </h1>
                <img className="w-36 " src="https://i.ibb.co/cr4vdRt/png-transparent-cbs-news-logo-graphic-designer-occupation-people-television-logo-monochrome-removebg.png" alt="" />
            </div> 
            <div>
                <p className="text-xl text-center font-bold px-10 mt-4 md:mb-16 ">A reviewer should provide suggestions and recommendations for revisions, identify additional work needed or necessary for consideration, and/or make clarifications that would enhance the quality of the manuscript.</p>
            </div>
            
          </div>

          <div className="flex md:flex-row flex-col justify-around">
          <div>
                <GiveRev></GiveRev>
            </div>
            <div className="md:mt-24">
                  <Dataforreviewuse></Dataforreviewuse>
            </div>
          </div>
           
            
        </div>
    );
};

export default Details;