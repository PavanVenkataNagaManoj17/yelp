import React,{useState,useContext} from 'react'
import RestaurantFinder from '../api/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';
const AddRestaurant = () => {
  const {addRestaurants}=useContext(RestaurantsContext);
  const [name,setName]=useState("");
  const [location,setLocation]=useState("");
  const [priceRange,setPriceRange]=useState("Price Range");
  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      const response=await RestaurantFinder.post("/",{
        name:name,
        location:location,
        price_range:priceRange
      });
      addRestaurants(response.data.data.restaurant)
      console.log(response);
    }catch(err){}
  }
  return (
        <div className="mb-4">
            <form action="">
                <div className="form-row" style={{display:"flex",gap:"1rem"}}>
                    <div className="col">
                        <input value={name} onChange={e=>setName(e.target.value)} type="text"  className="form-control" placeholder="name"/>
                    </div>
                    <div className="col">
                        <input value={location} onChange={e=>setLocation(e.target.value)} type="text"  className="form-control" placeholder="location "/>
                    </div>
                    <div className="col">
                        <select
                        value={priceRange} onChange={e=>setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
  );
};

export default AddRestaurant;
// import React from "react";

// const AddRestaurant = () => {
//   return (
//     <div>
//       <div className="mb-4">
//         <form action="">
//           <div className="form-row" style={{ display: "flex", gap:"1rim" }}>
//             <div className="col">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//               />
//             </div>
//             <div className="col">
//               <input
//                 className="form-control"
//                 type="text"
//                 placeholder="Location"
//               />
//             </div>
//             <div className="col">
//               <select className="custom-select my-1 mr-sm-2">
//                 <option disabled>Price Range</option>
//                 <option value="1">$</option>
//                 <option value="2">$$</option>
//                 <option value="3">$$$</option>
//                 <option value="4">$$$$</option>
//                 <option value="5">$$$$$</option>
//               </select>
//             </div>
//             <button>Add</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRestaurant;
