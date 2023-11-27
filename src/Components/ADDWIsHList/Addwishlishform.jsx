import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Home/Nav";
import { useContext } from "react";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import Swal from "sweetalert2";


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
            <div className="text-3xl text-center font-bold text-red-950">
               <h1 className="mt-16 mb-8">Add The Appertment in Wishlist</h1>
              <div>
             

              <div>



<div  className="flex justify-center items-center">

<div className="form-container mt-10 mb-32 text-black font-bold">
<form onSubmit={handleAddwishlish} className="form">
<div className="form-group">
<label htmlFor="email">USER Email</label>
<input type="email"  name="email" defaultValue={user?.email} required />
</div>
<div className="form-group">
<label htmlFor="email">USER NAME</label>
<input type="text" name="name" defaultValue={user?.name} required />
</div>
<div className="form-group">
<label htmlFor="email">Date</label>
<input type="time" name="date" defaultValue={user?.name} required />
</div>

<Link to={'/des/wishdata'}>

<button className="btn bg-purple-500 text-white" type="submit">Add in Wislist</button>

</Link>

</form>
</div>

</div>



</div>






              </div>








            </div>



            
        </div>
    );
};

export default Addwishlishform;