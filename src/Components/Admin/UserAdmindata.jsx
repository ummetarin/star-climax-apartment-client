

const UserAdmindata = ({data}) => {
    const{
        name,email
        }=data||{}

    return (
        
             <tr>
           <th className="text-sm text-green-900">{data.name}</th>
           <td className="text-sm font-bold text-purple-900">{data.email}</td>
           <td><button className="btn bg-pink-200">Admin</button></td>
           <td><button className="btn bg-slate-950 text-white">Agent</button></td>
           <td><button className="btn bg-yellow-500 text-white">Delete</button></td>
          </tr>


       
      
  

            
        
    );
};

export default UserAdmindata;