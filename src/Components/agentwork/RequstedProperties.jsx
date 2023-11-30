import { useEffect } from "react";
import { useState } from "react";
import ReqTable from "./ReqTable";
import Swal from "sweetalert2";


const RequstedProperties = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
            fetch('http://localhost:3000/offerdata')
           .then(res => res.json())
           .then(result => {
            setData(result)
          
           });

       console.log(data);
           
     }, []);

    //  const handleBuy = async (ID) => {
    //   try {
    //     const response = await fetch(`http://localhost:3000/approveddata/${ID}`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
           
    //       }),
    //         });
  
    //     if (response.ok) {
    //       // Handle success if needed
    //       Swal.fire({
    //         position: 'top-center',
    //         icon: 'success',
    //         title: 'Product Selected',
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     } else {
    //       console.error('Failed to process buy request');
    //     }
    //   } catch (error) {
    //     console.error('Failed to process buy request', error);
    //   }
    // };
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
          fetch(`http://localhost:3000/dataapproved/${_id}`,{
              method:"DELETE"
    
          })
          .then(res=>res.json())
          .then(d=>{
              console.log(d);
              if(d.deletedCount>0){
                const fil = data.filter(get => get._id != _id)
                setData(fil)
    
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

<div className="overflow-x-auto bg-black text-white">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="text-white text-xl">Image</th>
        <th className="text-white text-xl">Appertment name</th>
        <th className="text-white text-xl">Buyer Email</th>
        <th className="text-white text-xl">Offer Price</th>
        <th className="text-white text-xl">Date</th>
        <th className="text-white text-xl">Delete</th>
        <th className="text-white text-xl">Permit</th>


      </tr>
    </thead>
    <tbody>
     {
        data?.map(item=><ReqTable data={item} key={item.ID}
        
            onhandledelete={()=>handledlt(item._id)}
            ></ReqTable>)
     }
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
            
        </div>
    );
};

export default RequstedProperties;