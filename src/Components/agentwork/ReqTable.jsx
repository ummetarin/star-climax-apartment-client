import Swal from "sweetalert2";



const ReqTable = ({data,onhandledelete}) => {
  const{Proname,Proloc,priceto,priceFr,Protitle,Image,Category,ID,Status,agnam,Buyername,buyeremail,offerp,date}=data||{};
  console.log(data);
  
  const handleBuy = async (ID) => {
    console.log(ID);
    const {_id,...alldata}=data
    try {
      const response = await fetch(`http://localhost:3000/approveddata/${ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          alldata
        ),
          });

      if (response.ok) {
        // Handle success if needed
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Product Selected',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error('Failed to process buy request');
      }
    } catch (error) {
      console.error('Failed to process buy request', error);
    }
  };

    
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.Image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        
          </div>
        </td>
        <td>
          {data.Proloc}
        </td>
        <td>{data.buyeremail}</td>
        <td>{data.offerp}</td>
        <td>{data.date}</td>
        <td>  <button className="btn "
          onClick={onhandledelete}
        >
          <img className="w-10 " src="https://i.ibb.co/BN56wqr/png-clipart-logo-trademark-brand-delete-button-miscellaneous-text-removebg-preview.png"  alt="" />
        </button></td>
        <td>  <button className="btn"
              onClick={() => handleBuy(ID)}

        >
          <img className="w-10" src="https://i.ibb.co/D4SkDHG/360-F-332756773-vnko-JSebxy-XWLgn-WXY9odd-Uuk1-A7-Tm-DF-removebg-preview-1.png"  alt="" />
        </button></td>
       
       
        
      </tr>
     
    );
};

export default ReqTable;