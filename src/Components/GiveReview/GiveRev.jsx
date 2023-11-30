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
          <div>
      <div className="flex flex-col items-center justify-center h-screen dark">
  <div className="w-[600px] bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-black mb-4">GIVE REVIEW </h2>
    <form onSubmit={handlereview} className="flex flex-wrap ">
      <input type="email" defaultValue={user?.email} name="email" className="bg-pink-300  text-black border-0 rounded-md p-2 mb-4 focus:bg-pink-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"  placeholder="Email" />
      <input type="text"  name="name"  className="bg-pink-300  text-black border-0 rounded-md p-2 mb-4 focus:bg-pink-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]" placeholder="Name" />
      <input type="number"  name="Id" className="bg-pink-300 text-black border-0 rounded-md p-2 mb-4 focus:bg-pink-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]" placeholder="The Room Number" />
    
      <input type="time"  name="time" className="bg-pink-300  text-black border-0 rounded-md p-2 mb-4 focus:bg-pink-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]" placeholder="Time" />
      
      <input type="text" name="textarea" className="bg-pink-300  text-black border-0 rounded-md p-2 mb-4 focus:bg-pink-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full h-44" placeholder="Give Review" />
     
     <div className="flex justify-center mx-auto ">
     <button type="submit" className="bg-pink-600 btn text-white">
        Review
      </button>
     </div>
    </form>
  </div>


</div>

          </div>

            
            


        </div>

    );
};

export default GiveRev;