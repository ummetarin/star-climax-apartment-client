import { useContext, useState } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveRev = () => {
    const data=useLoaderData();

 

    const{ user }=useContext(AuthContext);

    const handlereview=e=>{
        e.preventDefault();
     const form=e.target;
     const name=form.name.value;
     const email=form.email.value;
     const Id=form.Id.value;
     const Image=form.Image.value;
     const textarea=form.textarea.value;
    
       if(data.ID!=Id){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The Room Number is Wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });

       }
       else{
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

            
            <div className="flex flex-row justify-center items-center ">
                <h1 className=" text-4xl font-bold  text-pink-900 ">Give Review About Our Appertment </h1>
                <img className="w-36 " src="https://i.ibb.co/cr4vdRt/png-transparent-cbs-news-logo-graphic-designer-occupation-people-television-logo-monochrome-removebg.png" alt="" />
            </div> 
            <div>
                <p className="text-xl text-center font-bold px-10 mt-4 md:mb-16 ">A reviewer should provide suggestions and recommendations for revisions, identify additional work needed or necessary for consideration, and/or make clarifications that would enhance the quality of the manuscript.</p>
            </div>
            

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
      <label htmlFor="email">Appertment Number</label>
      <input type="password"  name="Id" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Reviewer Photo</label>
      <input type="text"  name="Image" required />
    </div>
    <div className="form-group">
      <label htmlFor="textarea">Give Review About This appertment?</label>
      <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue={"          "} />
    </div>
    <button className="btn bg-purple-500 text-white" type="submit">Review</button>
  </form>
</div>

            </div>
            <div>
              
                  <h1 className="text-4xl font-bold text-pink-900 md:mt-16">Reviews are:</h1>


               
            </div>

           </div>

        </div>

    );
};

export default GiveRev;