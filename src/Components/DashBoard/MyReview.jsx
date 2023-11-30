import { useContext, useEffect, useState } from "react";
import MyRevewsdata from "./MyRevewsdata";
import { AuthContext } from "../AuthWork.jsx/AuthProvider";
import Swal from "sweetalert2";


const MyReview = () => {
    
    const{user}=useContext(AuthContext);

    const [data, setdata] = useState([]);
     useEffect(() => {
      fetch(`http://localhost:3000/revdataformy/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setdata(data));
    }, [user]);

    const handledlt=_id=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            fetch(`http://localhost:3000/datadltrev/${_id}`,{
                method:"DELETE"
      
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                  const fil = data.filter(get => get._id != _id)
                  setdata(fil)
      
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
                }
            })
      
            }
          })
         
       }
  



    return (
        <div>
                     <div>
         <h1 className="text-3xl text-center font-bold text-orange-950 mb-16">My reviews Are</h1>
         <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {
            data.map(item =><MyRevewsdata  key={item.Id} data={item} handledlt={handledlt} ></MyRevewsdata>)
            }
         </div>

            
        </div>
          
        </div>
    );
};

export default MyReview;













































































