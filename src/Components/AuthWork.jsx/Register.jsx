import Nav from "../Home/Nav";



const Register = () => {
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
    <form className="form">
  <p className="title">Register </p>
  <p className="message">Signup now and get full access to our app. </p>
  <div className="flex">
   
    <label>
      <input required placeholder type="text" className="input" />
      <span>Name</span>
    </label>
  </div>  
  <label>
    <input required placeholder type="email" className="input" />
    <span>Email</span>
  </label> 
  <label>
    <input required placeholder type="password" className="input" />
    <span>Password</span>
  </label>
 
  <button className="submit">Submit</button>
  <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>

           </div>

           </div>

        </div>
    );
};

export default Register;