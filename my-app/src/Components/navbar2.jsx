import React  from "react";
import { Navigate } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const options = [
  { value: 'gifting', label: 'Gifting' },
  { value: 'Fruites&Vegitables', label: 'Fruites&Vegitables' },
  { value: 'Chees&Meat', label: 'Chease&Meat' },
  { value: 'Delicatessen', label: 'Delicatessen' },
  { value: 'Intyernational Cuisein', label: 'International Cuisein' },
  { value: 'Health', label: 'Health' },
  { value: 'Indian Grocery', label: 'Indian Grocery' },
];


const Navbar2 = () =>{
  let navigate = useNavigate();

  let handlechange = (e)=>{

    if(e.target.value === "Fruites&Vegitables"){
       navigate("/FandF");
    }
    if(e.target.value === "Chees&Meat"){
      navigate("/CandM")
    }
  }
    return <div style={{margin:"auto",marginTop:"20px",marginTop:"100px" , width:"95%"}}>
            <div style={{display:"flex" , justifyContent:"center" , textAlign:"center" ,gap:"60px", border:"1px solid gray" }}>
            {/* <Select options={options} defaultValue="Select cat"  placeholder="Shop By Catogory" onChange={handlechange} /> */}
            <select defaultValue="Select" placeholder="Select by catogory" onChange={handlechange}>
              <option value="gifting">Select by Catogory</option>
              <option value="Fruites&Vegitables"> Fruites&Vegitables</option>
              <option value="Chees&Meat">Chees&Meat</option>
              <option  value="Delicatessen">Delicatessen</option>
              <option  value="International Cuisein">International Cuisein</option>
              <option  value="Health">Health</option>
              <option  value="Indian Grocery">Indian Grocery</option>
              {/* <option value="fr"><a href="">FR 🇫🇷</a></option> */}

            </select>
            <h2 style={{margin:"auto"}}>My Orders</h2>
            <h2 style={{margin:"auto"}}>Gifting</h2>
            <h2 style={{margin:"auto"}}>Reward</h2>
            <h2 style={{margin:"auto"}}>Blog</h2>
            <h2 style={{margin:"auto"}}>Offers</h2>
            <h2 style={{margin:"auto"}}>CONNOISSEUR’S SELECTION</h2>
            <h2 style={{margin:"auto"}}>Book Store visit</h2>
            </div>
          </div>
}

export default Navbar2