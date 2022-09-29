import getdata from "./Components/api"

// const axios = require('axios');

// Make a request for a user with a given ID
async function Consoledata(){
    getdata()
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
}
export default Consoledata;