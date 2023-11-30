import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Home/Nav";
import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import Swal from "sweetalert2";

{/* <div>
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

    </div> */}



const Addwishlishform = () => {
    const data=useLoaderData();
    console.log(data);
    const{_id,Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};

    const{user}=useContext(AuthContext);
    

const handleAddwishlish=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const date=form.date.value;
  console.log(name,email,date);

  const order={
      username:name,
      useremail:email,
      date:date,
      Proname,Proloc,priceFr,priceto,Protitle,Image,Category,ID,Status,Agentname,AgIm,_id

  }
  console.log(order);
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Added in Wishlist',
    showConfirmButton: false,
    timer: 1500
  })


  fetch('http://localhost:3000/wishdata',{

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
            <div>
                <Nav></Nav>
            </div>
          

            
<div>
<div className="flex flex-col items-center justify-center h-screen dark font-bold">
<div className="w-[600px] bg-black rounded-lg shadow-md p-6">
<h2 className="text-2xl font-bold text-white text-center mb-4"> Add in Wishlist </h2>
<form onSubmit={handleAddwishlish} className="flex flex-wrap ">
<input type="email" defaultValue={user?.email} name="email" className="bg-yellow-100  text-black border-0 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full  mr-[2%]"  placeholder="Email" />
<input type="text"  name="name"  className="bg-yellow-100  text-black border-0 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full " placeholder="Name" />
<input type="date"  name="date"  className="bg-yellow-100  text-black border-0 rounded-md p-2 mb-4focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full " placeholder="Date" />
<div className="flex justify-center mx-auto mt-9 ">

<button type="submit" className="bg-blue-600 btn text-white">
Add Wishlist
</button>
  </div>   
</form>
</div>


</div>

</div>
</div>






            



            
        
    );
};

export default Addwishlishform;