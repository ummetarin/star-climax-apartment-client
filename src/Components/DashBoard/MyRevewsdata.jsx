import { Link } from "react-router-dom";


const MyRevewsdata = ({data}) => {
    const{Proname,revname,textarea,revtime,
        revemail,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
    return (
        <div className="w-[500px] h-[200px] shadow-lg text-center font-bold bg-amber-400">
            <h1 className="mt-4 text-blue-700 text-xl">{data.Protitle}</h1>
            <h1 className="mt-2 text-xl">{data.revtime}</h1>
            <p className="mt-4 mb-2  text-purple-700">{data.textarea}</p>
            <button className="btn bg-red-900 text-white mt-1">Delete</button>
            
        </div>
    );
};

export default MyRevewsdata;