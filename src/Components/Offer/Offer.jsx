import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";


const Offer = ({data}) => {
  const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
  console.log(data);
      
  const{user}=useContext(AuthContext)

   const handleoffer=e=>{
    e.preventDefault();
     const form=e.target;
     const Protitle=form.Protitle.value;
     const Proloc=form.Proloc.value;
     const agnam=form.agnam.value;
     const Buyername=form.Buyername.value;
     const buyeremail=form.buyeremail.value;
     const date=form.date.value;
     const Offer={
         Protitle:Protitle,
         Proloc:Proloc,
         agnam:agnam,
         Buyername:Buyername,
         buyeremail:buyeremail,
         date:date,
         priceto,
         priceFr,
         Image,
         Category,ID,Status,


     }
    


   }



    return (
        <div>
           <div  className="flex md:flex-row flex-col  md:gap-24">
           <div>
            <div className="form-container mt-10 mb-32 text-black font-bold">
  <form onClick={handleoffer} className="form">
    <div className="form-group">
      <label htmlFor="email">Property Tile</label>
      <input type="text" defaultValue={data?.Protitle} name="Protitle" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Property Location</label>
      <input type="text" name="Proloc" defaultValue={data?.Proloc} required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Agent Name </label>
      <input type="text" name="agname"  required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Buyer Name</label>
      <input type="text" name="Buyername" defaultValue={user?.name} required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Buyer Email</label>
      <input type="email" name="buyeremail" defaultValue={user?.email} required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Buyer Date</label>
      <input type="date" name="date" required />
    </div>
   
    <button className="btn bg-purple-500 text-white" type="submit">Give Offer</button>
  </form>
</div>

            </div>
          


           </div>
 
        </div>
    );
};

export default Offer;