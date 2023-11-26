import { useEffect, useState } from "react";
import AllCardData from "./AllCardData";


const AllCard = () => {
    const [data, setData] = useState([]);
    const[filter,setFilter]=useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");



    useEffect(() => {
            fetch('http://localhost:3000/roomdata')
           .then(res => res.json())
           .then(result => {
            setData(result)
            const absData = result.filter(item => item.Status === "Available");
            // console.log(absData);
            setFilter(absData);
           });
           
     }, []);

     const filteredData = filter.filter(item =>
        item.Proname.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const sortedData = filteredData.slice().sort((a, b) => {
        const pronameA = a.Proname.toLowerCase();
        const pronameB = b.Proname.toLowerCase();
    
        if (sortDirection === "asc") {
          return pronameA.localeCompare(pronameB);
        } else {
          return pronameB.localeCompare(pronameA);
        }
      });
    
      const toggleSortDirection = () => {
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      };


    return (
        <div className=" mb-24">
             <div >
        
        <div className="text-3xl text-center font-bold mb-3 text-purple-950 flex justify-center items-center">
        <h1>All ROOM IN OUR APARTMENT</h1>
        <img className="w-44" src="https://i.ibb.co/fdZXyBc/png-transparent-logo-building-business-sales-industry-building-angle-building-apartment-removebg-pre.png" alt="" />
        </div>
        <div className="flex justify-center">
        <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-[800px] h-16 p-2 border bg-yellow-100 text-red-950 font-bold border-gray-400 rounded"
      />
        </div>
        <div className="flex justify-center mb-4">
          <button className="btn bg-yellow-600 text-white hover:bg-red-300" onClick={toggleSortDirection}>
            {sortDirection === "asc" ? "Sort Ascending" : "Sort Descending"}
          </button>
        </div>
    </div>
    {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto items-center justify-center md:gap-16 gap-7 md:mt-16">
        {filteredData.map(item => <AllCardData key={item.Id} data={item}></AllCardData>)}
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto items-center justify-center md:gap-16 gap-7 md:mt-16">
        {sortedData.map(item => <AllCardData key={item.Id} data={item}></AllCardData>)}
      </div>
      
            
        </div>
    );
};

export default AllCard;