import React from "react";
import { CartContext } from "../Components/Cartcontext";
import { removeFromCart } from "../Components/action";
import { checkout } from "../Components/action";
import { useContext } from "react";
import { useState } from "react";

const Cart = ()=>{
    const {state , dispatch} = useContext(CartContext);
    const [Sub_Total , setSub_Total] = useState(0);
    const [qty , setqty] = useState(1);
    const[click , setClicked]  = useState(false);

    let handleminus = (price)=>{
        setqty(qty-1);
        setClicked(true)
        setSub_Total(price*qty);
    }
    let handleplus = (price)=>{
        setqty(qty+1);
        setClicked(true);
        setSub_Total(price*qty);
    }
    let handlecheckout = ()=>{
        alert("Thank You Shopping With Us")
        dispatch(checkout());
    }

    return (
        <>
        <h2 style={{marginTop:"30px", color:"red"}}>GET YOUR ORDER DELIVERED IN 90 MINUTES . SERVICE TIMINGS BETWEEN 10:00 AM TO 9.30 PM .</h2>
    <div style={{border:"2px solid gray" ,width:"80%", marginTop:"50px" , marginLeft:"10%"  ,marginRight:"10%"}}>
             
             <table style={{ marginTop:"10px" , marginLeft:'18%'}}>
                 <thead style={{border :" 1px solid black" , marginLeft:"10px"}}>
                     <tr >
                        <th>Name   </th>
                        <th>|   Price  |</th>
                        <th>Discount  |</th>
                        <th>Qty   |</th>
                        <th>Total   |</th>
                        <th>Remove From Cart</th> 
                     </tr>
                 </thead>
                 {state.map((el)=>{
                    return  <tbody>
                    <tr>
                        <td>{el.title} |</td>
                        <td>{el.price} |</td>
                        <td>{0.00} |</td>
                        <td><button style={{backgroundColor:"yellowgreen",color:"aliceblue" ,borderRadius:"10px" , width:"20px"}} disabled={qty==1} onClick={()=>handleminus(el.price)}>-</button>{qty}<button style={{backgroundColor:"yellowgreen",color:"aliceblue" , borderRadius:"10px" , width:"20px"}} onClick={()=>handleplus(el.price)}>+</button></td>
                        <td>{!click ? el.price  : qty*el.price}</td>
                        <td><button style={{backgroundColor:"tomato" , borderRadius:"5px"}} onClick={()=>dispatch(removeFromCart(el.id))}>Remove</button></td>
                    </tr>
                 </tbody>
                 })}
             </table>
                 <div style={{marginTop:"50px" , marginBottom:"25px"}}>
                    <button style={{backgroundColor:"lightgreen", width:"200px" , borderRadius:"10px"}} onClick={handlecheckout}>CHECKOUT</button>
                </div>
          </div>
          </>
    )
}
export default Cart