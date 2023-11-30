import { useEffect, useState } from "react";


const UserAdmindata = ({data,ondeleteClick, onAdminClick, onAgentClick, isAdmin, isAgent  }) => {
    const{
        name,email
        }=data||{}

        const [isAgentDisabled, setIsAgentDisabled] = useState(false);

        useEffect(() => {
          // Update isAgentDisabled when isAgent changes
          setIsAgentDisabled(isAgent);
        }, [isAgent]);
      
  
       
    return (
        
             <tr>
           <th className="text-sm text-green-900">{data.name}</th>
           <td className="text-sm font-bold text-purple-900">{data.email}</td>
           <td>
        <button
          onClick={onAdminClick}
          className={`btn bg-pink-200 ${isAdmin ? 'disabled' : ''}`}
          disabled={isAdmin}
        >
          Admin
        </button>
      </td>
      <td>
        <button
          onClick={onAgentClick}
          className={`btn bg-slate-950 text-white ${isAgentDisabled ? 'disabled' : ''}`}
          disabled={isAgentDisabled}
        >
          Agent
        </button>
      </td>
      <td>
        <button onClick={ondeleteClick} className="btn bg-yellow-500 text-white">
          Delete
        </button>
      </td>
          </tr>


       
      
  

            
        
    );
};

export default UserAdmindata;