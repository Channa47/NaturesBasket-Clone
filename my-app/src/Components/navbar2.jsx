import React  from "react";
import Select from 'react-select'

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
    return <div style={{margin:"auto",marginTop:"20px",marginTop:"100px" , width:"95%"}}>
            <div style={{display:"flex" , justifyContent:"center" , textAlign:"center" ,gap:"60px", border:"1px solid gray" }}>
            <Select options={options}  placeholder="Shop By Catogory" />
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