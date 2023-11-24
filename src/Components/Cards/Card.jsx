

const Card = ({data}) => {
    console.log(data);

    const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};


    return (
  <div className="card">
  <div >
    <img className="h-[250px] w-[450px] rounded-lg hover:translate-y-3" src={data.Image} alt="" />
  </div>
  <div className="card-info">
    <p className="text-2xl text-amber-950 font-bold">{data.Proloc} </p>
    <p className="text-body">{data.Proname}</p>
  </div>
  <div className="card-footer ">
    <span className="text-xl text-amber-600 font-bold">${data.priceto}-{data.priceFr}</span>
    <div className="text-sm text-red-950 font-bold">
      <button className="btn bg-yellow-600 text-white hover:bg-amber-300">Details</button>
    </div>
  </div></div>

    );
};

export default Card;