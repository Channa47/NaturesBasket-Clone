import axios from "axios";

 const getdata = () => {
  return axios.get(`https://rct1-database-app.onrender.com/fruites_and_veg`);
};

export default getdata