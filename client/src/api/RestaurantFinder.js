import axios from "axios";
export default axios.create({
    baseURL:"http://localhost:4009/api/v1/restaurants",
});