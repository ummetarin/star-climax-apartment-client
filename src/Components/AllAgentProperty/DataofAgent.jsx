

const DataofAgent = ({data}) => {
    const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
    return (
        <div>
          
          <div className="h-[500px] w-[400px]  ">
 <div >
   <img className="h-[250px] w-[450px] p-4 rounded-lg hover:translate-y-3" src={data.Image} alt="" />
 </div>
 <div className="card-info">
 <p className="text-body  text-amber-950 font-bold ml-3">{data.Proname}</p>
   <p className="text-2xl text-amber-950 font-bold ml-3">{data.Proloc} </p>
  
   <p className="text-xl font-bold mt-2 mb-4 ml-3  text-blue-900">{data.Status}</p>
 </div>
 <div className="card-footer ">
   <span className="text-xl text-amber-600 font-bold ml-3">${data.priceto}-{data.priceFr}</span>
    
 </div></div>  
        </div>
    );
};

export default DataofAgent;