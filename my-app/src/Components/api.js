import axios from "axios";

 const getdata = () => {
  return axios.get(`http://localhost:3000/fruites_and_veg`);
};

export default getdata