import React from 'react';

const Pro = ({data}) => {

    return (
        <div className="mx-auto flex justify-center">
        <div className="md:h-[500px] md:w-[395px] h-[550px] w-[300px]   ">
      <div >
        <img className="md:h-[250px] md:w-[450px] rounded-lg hover:translate-y-3" src={data.Image} alt="" />
      </div>
      <div className="card-info">
      <p className="text-body  text-amber-950 font-bold ml-3">{data.Protitle}</p>
        <p className="text-2xl text-amber-950 font-bold ml-3">{data.Proloc} </p>
       
        <div className="flex flex-row items-center mt-2 mb-2">
          <img className="w-16 ml-4" src="https://i.ibb.co/T8MVxCP/128427807-fashion-logo-with-head-of-young-elegant-girl-female-pretty-face-in-profile-simple-sign-vec.png" alt="" />
        <p className="text-xl font-bold mt-2 mb-4 ml-3  text-blue-900">Rifa</p>
        </div>
      </div>
      <div className="card-footer ">
        <span className="text-xl text-amber-600 font-bold">${data.priceto}-{data.priceFr}</span>
        <div className="text-sm text-red-950 font-bold">
        <button className="btn bg-red-600 w-[140px] text-white hover:bg-amber-300">Sold</button>
        </div>
      </div></div>
    
      </div>
    );
};

export default Pro;