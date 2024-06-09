import { useContext, useEffect } from "react";
import React from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
const RestaurantList=(props)=>{
    const{restaurants,setRestaurants}=useContext(RestaurantsContext)
    useEffect(()=>{
        const fetchData=async ()=>{
        try{
            const response =await RestaurantFinder.get("/")
            setRestaurants(response.data.data.restaurants);
        }
        catch(err){}
        }
        fetchData();
    },[])
    return (
        <div className="list_group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col" className="bg-primary">Restaurant</th>
                        <th scope="col" className="bg-primary">Location</th>
                        <th scope="col" className="bg-primary">Price Range</th>
                        <th scope="col" className="bg-primary">Ratings</th>
                        <th scope="col" className="bg-primary">Edit</th>
                        <th scope="col" className="bg-primary">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map((restaurant)=>{
                        return (
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td><button className="btn btn-warning">Update</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                    {/*  <tr>
                     <td>kfc</td>
                     <td>taiwan</td>
                     <td>$$$$</td>
                     <td>Rating</td>
                     <td><button className="btn btn-warning">Update</button></td>
                     <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                    <td>mcdonalds</td>
                    <td>New york</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                    <td>pizza hut</td>
                    <td>New york</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                    <td>novotel</td>
                    <td>vijayawada</td>
                    <td>$$$</td>
                    <td>Rating</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}
export default RestaurantList;