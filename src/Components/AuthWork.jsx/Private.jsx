import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Private = ({children}) => {

    
    const {user,loading}=useContext(AuthContext);
    console.log(user);

    if(loading){
        return(
        
        <div>
                  
    <div className="loader">
    <span></span>
   </div>
        </div>
        )
    }

    if(user){
        return children;
    }

return  <Navigate to={'/res'} ></Navigate>;
};

export default Private;