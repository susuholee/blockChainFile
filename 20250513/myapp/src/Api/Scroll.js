import axios from "axios";

const getPockList  = async (offset = 0, limit = 20) => {
 const response = await axios.get(`http://localhost:4000/pokemon?offset=${offset}&limit=${limit}`);
    console.log(response.data);
    return response.data;
}
export {getPockList}