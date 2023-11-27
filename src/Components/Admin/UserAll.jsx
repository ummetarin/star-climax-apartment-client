import { useEffect, useState } from "react";
import UserAdmindata from "./UserAdmindata";


const UserAll = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
     fetch("http://localhost:3000/user")
       .then((res) => res.json())
       .then((data) => setdata(data));
   }, []);
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-xl text-red-950 font-bold ">
      <tr>
        <th>User Name</th>
        <th>User Email</th>
        <th>Admin</th>
        <th>Agent</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
   {
    data?.map(item=><UserAdmindata key={item._id} data={item}></UserAdmindata>)
   }
      
     
    </tbody>
  </table>
</div>
    );
};

export default UserAll;