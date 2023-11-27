import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";






const GiveRev = () => {
    const data=useLoaderData();
    const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};



    const{ user }=useContext(AuthContext);

    const handlereview=e=>{
        e.preventDefault();
     const form=e.target;
     const name=form.name.value;
     const Id=form.Id.value;
     const email=form.email.value;
     const textarea=form.textarea.value;
     const time=form.time.value;
     const review={
         revtime:time,
         revname:name,
         revemail:email,
         textarea:textarea,
         RoomNumber:Id,
         Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm


     }
    
       if(data.ID!=Id){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Room Number is Wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });

       }
       else{
       console.log(review);

        fetch('http://localhost:3000/revdata',{

        method:'POST',
        headers:{
          'content-type':"application/json"
      
        },
        body:JSON.stringify(review)
        }
        )
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
           Swal.fire({
           position: "top-center",
           icon: "success",
           title: "Done Review",
          showConfirmButton: false,
           timer: 1500
            });
        
       }
     
    }


    return (
       
        <div>

            
            

           <div  className="flex md:flex-row flex-col  md:gap-24">
           <div>
            <div className="form-container mt-10 mb-32 text-black font-bold">
  <form onSubmit={handlereview} className="form">
    <div className="form-group">
      <label htmlFor="email">Company Email</label>
      <input type="email" defaultValue={user?.email} name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Name</label>
      <input type="text" name="name" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">The Room Number </label>
      <input type="password" name="Id" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Time</label>
      <input type="time" name="time" required />
    </div>
   
    <div className="form-group">
      <label htmlFor="textarea">Give Review About This appertment?</label>
      <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue={"          "} />
    </div>
    <button className="btn bg-purple-500 text-white" type="submit">Review</button>
  </form>
</div>

            </div>
          


           </div>

        </div>

    );
};

export default GiveRev;