import { useEffect, useState } from "react";
import AllCardData from "./AllCardData";


const AllCard = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("");
    


    useEffect(() => {
      const fetchData = async () => {
        // Construct the URL with query parameters for search and sorting
        const url = `http://localhost:3000/agentdataforallcard?search=${searchQuery}&sortBy=${sortBy}`;
        
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      };
  
      fetchData();
    }, [searchQuery, sortBy]);

    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleSort = (sortOption) => {
      setSortBy(sortOption);
    };
    const sortByProname = () => {
      const sortedData = [...data].sort((a, b) => a.Proname.localeCompare(b.Proname));
      setData(sortedData);
    };
    const filteredData = data.filter((item) =>
    item.Proname.toLowerCase().includes(searchQuery.toLowerCase())
  );


    return (
        <div className=" mb-24">
             <div >
        
        <div className="md:text-4xl text-xl text-center font-bold mb-3 text-purple-950 flex md:flex-row flex-col justify-center items-center">
        <h1 className="underline">All ROOM IN OUR APARTMENT</h1>
        <img className="w-44" src="https://i.ibb.co/FWMsgFn/png-transparent-real-estate-logo-home-building-home-building-text-logo-removebg-preview.png" alt="" />
        </div>
        <p className="text-center px-24 text-sm font-bold mb-5 text-sky-950">Find and book deals on the best apartments in Dhaka, Bangladesh! Explore guest reviews and book the perfect apartment for your trip.Apartment List is a free service that helps you find the perfect apartment. Click to view move-in specials, photos, floorplans, rates, amenities and more...</p>
        <div className="flex justify-center mt-16 mb-16">
        <input
          type="text"
          placeholder="Search property..."
          value={searchQuery}
          onChange={handleSearch}
          className="border bg-pink-100 p-2 mr-4 md:w-[500px] w-[300px] h-16 "
        />
         
        <button className="bg-red-600 md:w-[200px] w-[150px] h-16 font-bold text-white" onClick={sortByProname}>Sort by Proname</button>
     
        </div>
      
    </div>
    {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto items-center justify-center md:gap-16 gap-7 md:mt-16">
        {filteredData.map(item => <AllCardData key={item.Id} data={item}></AllCardData>)}
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto items-center justify-center md:gap-16 gap-7 md:mt-16">
        {filteredData.map(item => <AllCardData key={item.Id} data={item}></AllCardData>)}
      </div>
      
            
        </div>
    );
};

export default AllCard;