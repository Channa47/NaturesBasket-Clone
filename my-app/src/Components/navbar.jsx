import { border } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";


let HandleClick = ()=>{
   let navigate = useNavigate();
   navigate("/")
}

function Navbar() {
 

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "80%",
        margin: "auto",
        // border: "2px solid red",
        width:"100%",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        backgroundColor:"whitesmoke",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      }}
    >  
      <img onClick={HandleClick} src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" />
      <div style={{width:"100%"}}>
      <div style={{
        display:"flex", justifyContent:"space-around", gap:"10px",
         width:"100%"
        }}>
      <h1>Online solts</h1> |
      <h1>Fresh</h1> |
      <h1>Food</h1>|
      <h1>Contact us</h1>|
       <button>LOG IN</button>|
       <button> Sign Up</button>
       </div>
       <div style={{display:"flex" , gap:"40px" , }}>
       <input placeholder="Start Shopping......" style={{ border:"1px solid gray", textAlign:"center", width:"80%" , marginTop:"10px",borderRadius:"10px"}}/>
       <img width={80} style={{marginTop:"9px" , borderRadius:"20px",padding:"10px"}} src="data:image/png;base64,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" />
       <img onClick={()=>console.log("channa")} width={50} style={{marginTop:"10px",borderRadius:"20px",padding:"10px"}} src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=170667a&w=0&h=kEh5VLsTHukWc7xf2BvUs8ssqS_d7vkK0-xU3MDpO7s=" />
       <img width={45} style={{marginTop:"9px" , borderRadius:"20px",padding:"10px"}} src="data:image/png;base64,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" />
       </div>
       </div>
    </div>
  );
}

export default Navbar;
