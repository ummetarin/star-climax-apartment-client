import { useEffect, useState } from "react";
import UserAdmindata from "./UserAdmindata";
import Swal from "sweetalert2";


const UserAll = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
     fetch("http://localhost:3000/user")
       .then((res) => res.json())
       .then((data) => setdata(data));
   }, []);

   const handleAdmin = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/user/admin/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Handle success, for example, by updating the local state
        setdata((prevData) =>
          prevData.map((user) =>
            user._id === userId ? { ...user, role: 'admin' } : user
          )
        );

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Admin Selected",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        // Handle errors
        console.error('Failed to update user role to admin');
      }
    } catch (error) {
      console.error('Failed to update user role to admin', error);
    }
  };

  const handleAgent = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3000/user/agent/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Handle success, for example, by updating the local state
        setdata((prevData) =>
          prevData.map((user) =>
            user._id === userId ? { ...user, role: 'agent' } : user
          )
        );

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Agent Selected",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        // Handle errors
        console.error('Failed to update user role to agent');
      }
    } catch (error) {
      console.error('Failed to update user role to agent', error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setdata((prevData) => prevData.filter((user) => user._id !== _id));
        
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "The data is Deleted",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
       
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Failed to delete user', error);
    }
  };





    return (
        <div className="overflow-x-auto w-full">
  <table className="table">
    {/* head */}
    <thead className="text-xl text-red-950 font-bold ">
      <tr>
        <th>User Name</th>
        <th>User Email</th>
        <th>RoleAdmin</th>
        <th>RoleAgent</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
          {data?.map((item) => (
            <UserAdmindata
              key={item._id}
              data={item}
              onAdminClick={() => handleAdmin(item._id)}
              onAgentClick={() => handleAgent(item._id)}
              ondeleteClick={() => handleDelete(item._id)}
              isAdmin={item.role === 'admin'}
              isAgent={item.role === 'agent'}
            />
          ))}
        </tbody>
  </table>
</div>
    );
};

export default UserAll;