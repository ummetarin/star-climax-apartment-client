

const Offer = () => {
    return (
        <div>
           <div  className="flex md:flex-row flex-col  md:gap-24">
           <div>
            <div className="form-container mt-10 mb-32 text-black font-bold">
  <form  className="form">
    <div className="form-group">
      <label htmlFor="email">Company Email</label>
      <input type="email"  name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Name</label>
      <input type="text" name="name" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">The Room Number </label>
      <input type="password" name="Id" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Time</label>
      <input type="time" name="time" required />
    </div>
   
    <div className="form-group">
      <label htmlFor="textarea">Give Review About This appertment?</label>
      <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue={"          "} />
    </div>
    <button className="btn bg-purple-500 text-white" type="submit">Review</button>
  </form>
</div>

            </div>
          


           </div>
 
        </div>
    );
};

export default Offer;