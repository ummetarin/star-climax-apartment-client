

const Reviwe = ({data}) => {
    const{RID,revname,review,Time,Category,Status,Image}=data||{}
   
    return (
      
       
      <div className="flex flex-col gap-5 ">

      <div className="ml-9">
          <img className="w-[480px] h-[300px]" src={data.Image} alt="" />
      </div>
      <div className="font-bold ml-6 ">
        <h1>{data.revname}</h1>
        <p>{data.review}</p>
        <p>{data.Status}</p>
        <img className="w-36" src="https://i.ibb.co/23kWhgZ/1000-F-342486113-if-Lb-H9-Y9c9b-Jvyr-N5-M3-RAjn-Jc3jgmj-HK-removebg-preview.png" alt="" />
      <div className="">
      <button className="bg-red-600 text-white btn mx-auto justify-center">Review</button>
      </div>
      </div>


      </div>
  


       
       
       
       
       
    );
};

export default Reviwe;