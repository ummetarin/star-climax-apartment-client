
const Other = () => {
    return (
        <div>
          <div className="flex flex-row justify-center items-center ">
                <h1 className=" md:text-4xl text-sm font-bold  text-blue-800 underline">Introduction About My Appertment</h1>
                <img className="w-36" src="https://i.ibb.co/ZmZjjtn/lo.png" alt="" />
          </div>
        <div className="px-16 md:mb-3 mb-7  text-sm md:text-xl text-green-800">
                <p>An apartment or flat  is a place to live that is only part of a larger building. Usually it is a group of rooms on one floor of a building in a city, where land is too expensive for people to have separate houses. An apartment that people own is called a condominium or "condo"</p>
        </div>

         <div className="flex flex-row justify-center gap-8 md:mt-16 mb-24 data items-center bg-fixed  ">
            <div>
                <img className="md:h-[400px] md:w-[450px] h-[200px] w-[200px]" src="https://i.ibb.co/z2fX1C3/bg.jpg" alt="" />
            </div>
            <div className="text-center text-white">
                 <h1 className="mt-4 font-bold text-3xl ">Welcome to my Appertment</h1>
                 <p className="mt-4 font-bold text-xl">Apartments & Flats for Sale in Bangladesh. Showing 1-25 of 4,836 ads. </p>
                 <p className="font-bold">Ready Flat for sale at Gausul Azam Avenue, Uttara, Dhaka. Tk 10,500 per sqft.</p>
                 <button className="btn mt-6 bg-red-600 text-white">View</button>       
            </div>
         </div>




        </div>
    );
};

export default Other;