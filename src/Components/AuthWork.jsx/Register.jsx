import { useContext } from "react";
import Nav from "../Home/Nav";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";



const Register = () => {
  const{ createUser,Googlesignin }=useContext(AuthContext);
  

  const handleresister=e=>{
    e.preventDefault();
  const form=e.target;
  const name=form.name.value;
  const email=form.email.value;
  const password=form.password.value;
  const Image =form.Image.value;
  
  if (password.length <6 || /[A-Z]/.test(password) || /[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Invalid password! Password should have less than 6 characters, no uppercase letters, and no special characters.',
         });
         return;
       }
  else{
    // console.log(name,email,password,Image);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Regitered',
    showConfirmButton: false,
    timer: 1500
  })
  
  createUser(email,password)
  .then(result=>{
   const user=result.user;
   console.log(user);
  })
  .catch(error=>console.log(error))

  }
  }

  const handlegogle=()=>{
   Googlesignin().then((result)=>{
    console.log(result.user);
    Swal.fire({
     position: 'top-center',
     icon: 'success',
     title: 'Loged in',
     showConfirmButton: false,
     timer: 1500
   })

   })
  }




    return (
        <div  className="">
           <div className="">
            <Nav></Nav>
           </div>

    <div className="flex md:flex-row flex-col-reverse justify-center items-center md:gap-36">
             
           <div >
    <img src="https://i.ibb.co/SRsf7fW/sec-removebg-preview.png" alt="" />
           </div>
           <div>
    <form className="form mt-24 mb-24" onSubmit={handleresister}>
  <p className="title">Register </p>
  <p className="message">Signup now and get full access to our app. </p>
  <div className="flex">
   
    <label>
      <input required placeholder="Name" type="text" name="name" className="input" />
      
    </label>
  </div>  
  <label>
    <input required placeholder="Email" type="email" name="email" className="input" />
 
  </label> 
 
  <label>
    <input required placeholder="Password" type="password" name="password" className="input" />
   
  </label>
  <label>
    <input required placeholder="Photo Url" type="text" name="Image" className="input" />
    
  </label> 
 
  <button className="submit">Submit</button>
  <div className="social-accounts flex gap-8">
        <p>Login with ---- google</p>
        <button onClick={handlegogle} className="social-button google">
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg></button>
        
        
      </div>
  <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>

</form>

           </div>

           </div>

        </div>
    );
};

export default Register;