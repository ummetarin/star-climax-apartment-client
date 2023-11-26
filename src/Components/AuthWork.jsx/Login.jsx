import Swal from "sweetalert2";
import Nav from "../Home/Nav";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Login = () => {

  const{ Signin,Googlesignin }=useContext(AuthContext);
  const handlelogin= e =>{
    e.preventDefault();
   const form=e.target;
   const email=form.email.value
   const password=form.password.value;
   const name=form.name.value;
   const userdata={
    name:name,
    email:email
   
  }
   if (password.length <6 || /[A-Z]/.test(password) || /[!@#$%^&*()_+{}[\]:;<>,.?~\\]/.test(password)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid password! Password should have less than 6 characters, no uppercase letters, and no special characters.',
    });
    return;
  }
 else{
  fetch('http://localhost:3000/user',{

  method:'POST',
  headers:{
    'content-type':"application/json"

  },
  body:JSON.stringify(userdata)
  })

  console.log(password,email);
  Signin(email,password)
  .then(res=>{
   const user=res.user;
   console.log(user);
  })
  .catch(err=>console.log(err));
  

 }
  }

  const handlegogle=()=>{
    Googlesignin().then((result)=>{
     console.log(result.user);
     alert("loged")

    })
  }






    return (
        <div >
          <div>
            <Nav></Nav>
          </div>
       

         <div className="flex md:flex-row items-center justify-center flex-col-reverse md:gap-40 ">
         <div>
           <img className="h-[400px] w-[430px]" src="https://i.ibb.co/gZxYBp4/login-removebg-preview.png" alt="" />
       </div>
       <div className="mt-9 mb-24">
  <div className="container ">
    <div className="heading">Please Login</div>
    <form onSubmit={handlelogin} action className="form">
    <input required className="input" type="text" name="name"  placeholder="Name" />
      <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
      <input required className="input" type="password" name="password" id="password" placeholder="Password" />
      <input className="login-button" type="submit" defaultValue="Sign In" />
    </form>
    <div className="social-account-container">
      <span className="title">Or Sign in with</span>
      <div className="social-accounts">
        <button onClick={handlegogle} className="social-button google">
          <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg></button>
        
        
      </div>
    </div>
    <span className="agreement"><a href="#">Learn user licence agreement</a></span>
  </div>
</div>
         </div>

        </div>
    );
};

export default Login;