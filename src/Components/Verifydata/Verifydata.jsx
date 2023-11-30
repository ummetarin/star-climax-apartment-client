import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import { useState } from "react";


const Verifydata = () => {

    const{user}=useContext(AuthContext);
    const data=useLoaderData();
    console.log(data);
    
    const{Proname,_id,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
    const [buttonDisabled, setButtonDisabled] = useState(false); 


    const handleAddwishlish=e=>{
        e.preventDefault();
        setButtonDisabled(true);
        const form=e.target;
        const email=form.email.value;
        const date=form.date.value;
        console.log(email,date);
    
      const order={
          useremail:email,
          date:date,
          Proname,Proloc,priceFr,priceto,Protitle,Image,Category,ID,Status,Agentname,AgIm,_id
    
      }
      console.log(order);
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Verified',
        showConfirmButton: false,
        timer: 1500
      })
    
    
      fetch('http://localhost:3000/agentdata',{
    
      method:'POST',
      headers:{
        'content-type':"application/json"
    
      },
      body:JSON.stringify(order)
      }
      )
      .then(res=>res.json())
      .then(data=>{
    
        console.log(data);
      })
    }


    return (
        <div>

<div  className="flex justify-center items-center">

<div className="form-container mt-10 mb-32 text-black font-bold">
<form onSubmit={handleAddwishlish} className="form">
<div className="form-group">
<label htmlFor="email">USER Email</label>
<input type="email"  name="email" defaultValue={user?.email} required />
</div>
<div className="form-group">
<label htmlFor="email">Date</label>
<input type="time" name="date"  required />
</div>


<button
              className="btn bg-red-500 text-white"
              type="submit"
              disabled={buttonDisabled} // Set the disabled attribute
            >
              Verify Data
            </button>


</form>
</div>

</div>
            
        </div>
    );
};

export default Verifydata;