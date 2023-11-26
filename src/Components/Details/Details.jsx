import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Home/Nav";
import GiveRev from "../GiveReview/GiveRev";


const Details = () => {
    const data=useLoaderData();
    console.log(data);
    const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};


    const seewishdata=()=>{
        data.Image,
        data.Proname,
        data.Des,
        data.priceto,
        data.priceFr,
        data.Agentname,
        data.Protitle,
        data.ID,
        data.Category,
        data.Status
    }
    // console.log(seewishdata);

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
              <Link to={'/wishdata'}> <button onClick={seewishdata} className="btn bg-rose-800 text-white mt-6">Add To  Wishlist</button></Link>
            </div>
          </div>

          <div>
          <div>
                <GiveRev></GiveRev>
            </div>
          </div>
           
            
        </div>
    );
};

export default Details;