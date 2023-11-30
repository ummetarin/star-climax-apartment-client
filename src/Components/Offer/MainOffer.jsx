import { useEffect, useState } from "react";

import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const MainOffer = () => {
  const data=useLoaderData();
  
  const{user}=useContext(AuthContext)
  const{Proname,_id,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};

  const handleoffer=e=>{
   e.preventDefault();
    const form=e.target;
    const Protitle=form.Protitle.value;
    const Proloc=form.Proloc.value;
    const agnam=form.agnam.value;
    const Buyername=form.Buyername.value;
    const buyeremail=form.buyeremail.value;
    const date=form.date.value;
    console.log(date);
    const offerp = parseFloat(form.offerp.value);
    const Offer={
        Protitle:Protitle,
        Proloc:Proloc,
        agnam:agnam,
        Buyername:Buyername,
        buyeremail:buyeremail,
        date:date,
        offerp:offerp,
        priceto,
        priceFr,
        Image,
        Category,ID,Status,


    }
    console.log(Offer);
    if (offerp > priceFr || offerp < priceto) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Offer Price',
        text: `Offer price must be between ${priceFr} and ${priceto}`,
      });
      return; // Stop execution if the offer price is not within the valid range
    }

     else{
    
    
      fetch('http://localhost:3000/offerdata',{
    
      method:'POST',
      headers:{
        'content-type':"application/json"
    
      },
      body:JSON.stringify(Offer)
      }
      )
      .then(res=>res.json())
      .then(data=>{
    
        console.log(data);
      })
   

      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Requested For offer',
        showConfirmButton: false,
        timer: 1500
      })
    
     }


  }
    return (
        <div>
        <div  className="flex md:flex-row flex-col  md:gap-24">
        <div>
         <div className="form-container mt-10 mb-32 text-black font-bold">
<form onSubmit={handleoffer} className="form">
 <div className="form-group">
   <label htmlFor="email">Property Tile</label>
   <input type="text" defaultValue={data?.Protitle} name="Protitle" required />
 </div>
 <div className="form-group">
   <label htmlFor="email">Property Location</label>
   <input type="text" name="Proloc" defaultValue={data?.Proloc} required />
 </div>
 <div className="form-group">
   <label htmlFor="email">Agent name</label>
   <input type="text" name="agnam"  required />
 </div>
 <div className="form-group">
   <label htmlFor="email">Buyer Name</label>
   <input type="text" name="Buyername" defaultValue={user?.displayName}  required />
 </div>
 <div className="form-group">
   <label htmlFor="email">Offer Price</label>
   <input type="text" name="offerp" required />
 </div>
 <div className="form-group">
   <label htmlFor="email">Buyer Email</label>
   <input type="email" name="buyeremail" defaultValue={user?.email} required />
 </div>
<div className="form-group">
   <label htmlFor="date">Buyer Date</label>
   <input  type="time" name="date"  id="date" />
 </div>

 <button className="btn bg-purple-500 text-white" type="submit">Give Offer</button>
</form>
</div>

         </div>
       


        </div>

     </div>
    );
};

export default MainOffer;