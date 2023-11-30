

const GiveReviewdata = ({data}) => {
    const{Proname,revname,textarea,
        revemail,Proloc,priceto,priceFr,revtime,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
    return (
        <div>
            <div className="w-[600px] h-[80px]  pl-5 font-bold  bg-pink-300 shadow-lg">
            
              <div className="flex flex-row gap-8 items-center">
              <p className="text-red-700">Review:{data.revname}</p>
              <p>{data.revtime}</p>
              <img className="w-12" src="https://i.ibb.co/Pt5NSZC/Rating-icon-Graphics-12152816-1-580x386-removebg-preview.png" alt="" />
              </div>
                <p>{data.textarea}</p>
                
                <p></p>
            </div>
        </div>
    );
};

export default GiveReviewdata;
