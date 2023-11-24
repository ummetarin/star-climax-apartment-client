import Nav from "../Home/Nav";


const All = () => {
    return (
        <div>
          <Nav></Nav>

         <div className="flex flex-row justify-center gap-8  mb-24 data3 items-center bg-fixed  ">
            <div>
                <img className="h-[400px] w-[450px]" src="https://i.ibb.co/dWfGY1f/c.jpg" alt="" />
            </div>
            <div className="text-center text-white">
                 <h1 className="mt-4 font-bold text-3xl ">Apperment Full View</h1>
                 <p className="mt-4 font-bold text-sm">Apartments & Flats for Sale in Bangladesh. Showing 1-25 of 4,836 ads. </p>
                 <p className="font-bold">Ready Flat for sale at Gausul Azam Avenue, Uttara, Dhaka. Tk 10,500 per sqft.</p>
                 <button className="btn mt-6 bg-purple-600 text-white">View All Room</button>       
            </div>
         </div>




        </div>
    );
};

export default All;