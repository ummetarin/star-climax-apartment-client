

const GiveReviewdata = ({data}) => {
    const{Proname,revname,textarea,
        revemail,Proloc,priceto,priceFr,revtime,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
    return (
        <div>
            <div className="w-[600px]  bg-base-400 shadow-lg">
                <h1>The Data is</h1>
                <p>Review:{data.revname}</p>
                <p>{data.textarea}</p>
                <p></p>
            </div>
        </div>
    );
};

export default GiveReviewdata;
