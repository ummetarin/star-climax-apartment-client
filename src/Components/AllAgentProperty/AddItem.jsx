import Swal from "sweetalert2";


const AddItem = () => {
  // const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,Agentname,AgIm}=data||{};
  const handleser=e=>{
    e.preventDefault();
   const form=e.target;
   const Proname=form.Proname.value;
   const Proloc=form.Proloc.value;
   const Protitle=form.Protitle.value;
   const Image=form.Image.value;
   const priceto=form.priceto.value;
   const priceFr=form.priceFr.value;
   const Category=form.Category.value;
   const ID=form.ID.value;
   const Des=form.Des.value;
   const Status=form.Status.value
   


  const Order={
    Proname:Proname,
    Proloc:Proloc,
    Protitle:Protitle,
    Image:Image,
    priceto:priceto,
    priceFr:priceFr,
    Category:Category,
    ID:parseInt(ID),
    Des:Des,
    Status:Status

  }
 


   // console.log(Order);


   fetch('http://localhost:3000/addroomdata',{
     method:'POST',
     headers:{
      "content-type" :'application/json'
     },
     body:JSON.stringify(Order)
   })
   .then(res=>res.json())
   .then(data=>{
     console.log(data);
     if(data.insertedId){
       Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'The Product is Added',
         showConfirmButton: false,
         timer: 1500
       })
     }
   }
     )
     
 }
    return (
        <div>
            <div>
   <div className="flex flex-col items-center justify-center h-screen dark">
  <div className="md:w-[700px] bg-black rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-200 mb-12 text-center mt-4 ">Add A Items</h2>
    <form onSubmit={handleser} className="flex flex-wrap">
      <input type="text" name="Proname" className="bg-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-full mr-[2%]" placeholder=" Product Name" />
      <input type="text" name="Proloc" className="bg-white-700 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full " placeholder="Location" />
      <input type="text" name="Protitle" className="bg-white text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full  " placeholder="Product Title" />
      <input type="number" name="ID" className="bg-white  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] " placeholder="ID" />
      <input type="text" name="Category" className="bg-white  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-3 " placeholder="Category" />
      <input type="text" name="priceto" className="bg-white  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] " placeholder="Price from" />
      <input type="text" name="priceFr" className="bg-white  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]" placeholder="Price To" />
      <input type="text" name="Status" className="bg-white  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full  ml-[2%]" placeholder="Status" />
      
      <input type="text" name="Des" className="bg-white  text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full h-24 " placeholder="Description" />
      <input type="photo" name="Image" className="bg-white-700 text-black border-0 rounded-md p-2 mb-4 h-10 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full " placeholder="Image" />
      
   <div className="flex mx-auto">
   <button type="submit" className="bg-gradient-to-r justify-center from-red-500 to-red-900 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">
        Add product
      </button>
   </div>
    </form>
  </div>
</div>


            </div>
            
        </div>
    );
};

export default AddItem;