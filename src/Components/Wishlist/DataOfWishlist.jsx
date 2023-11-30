import { Link } from "react-router-dom";

const DataOfWishlist = ({data}) => {
    const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
    return (
        <div className="h-[500px] w-[395px]">
  <div >
    <img className="h-[250px] w-[450px] rounded-lg hover:translate-y-3 p-4" src={data.Image} alt="" />
  </div>
  <div className="card-info">
  <p className="text-body  text-amber-950 font-bold ml-3">{data.Proname}</p>
    <p className="text-2xl text-amber-950 font-bold ml-3">{data.Proloc} </p>

  </div>
  <div className="card-footer ml-3">
    <span className="text-xl text-amber-600 font-bold">${data.priceto}-{data.priceFr}</span>
    <div className="text-sm text-red-950 font-bold mr-3">
    <Link to={`/des/wish/offer/${data.ID}`}><button className="btn b bg-yellow-400 text-white hover:bg-red-500">OFFER</button></Link>
    <Link to={`/`}><button className="btn bg-pink-500 text-white hover:bg-amber-300">Delete</button></Link>
    </div>
  </div></div>
    );
};

export default DataOfWishlist;