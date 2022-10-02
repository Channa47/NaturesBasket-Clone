import React  from "react";
import axios from "axios"
import { Center, Img } from "@chakra-ui/react";
import {CartContext} from "../Components/Cartcontext"
import { useContext } from "react";
import {addToCart} from "../Components/action"

let getdata = ()=>{
    return axios.get(`http://localhost:3000/CMF`)
}


const CandM = ()=>{

    const [data , setData] =React.useState([]);
    const [error , setError] = React.useState(false);



    const {state , dispatch} = useContext(CartContext);

    React.useEffect(()=>{
        getdata()
        .then((res)=>setData(res.data))
        .catch((err)=>setError(true));
    },[]);

    if(error){
        return <div>Some thing went wrong</div>
    }


    return (
         <div  style={{display:"Grid" , gridTemplateColumns:"repeat(3,1fr)" , gap:"10px", marginTop:"20px" }}>
            {data.map((el)=>{
                return (
                    <div key={el.id} 
                    style={{ border:"1px solid gray " ,  textAlign:"center" , justifyContent:"center"}}>
                        <div style={{margin:'auto',
                         border:"2px yeloow" ,width:"80%", backgroundColor:"alice-blue",boxShadow:"inherit"
                    }}
                        >
                        <img width="90%"  style={{marginTop:"10px"}} src={el.img} /></div>
                        <h1>{el.title}</h1>
                        <h2>1 pc</h2> 
                        <div style={{display:"flex" , textAlign:"Center" , justifyContent:"Center" , gap:"10px"}}>
                            <h2 style={{marginTop:"10px"}}>Rs {el.price}</h2>
                            {/* <button 
                            style={{backgroundColor:"green" , marginTop:"10px" , marginBottom:"10px"}}>Add To cart</button> */}

                            <button onClick={()=>dispatch(addToCart(el))}
                            style={{backgroundColor:"green" ,borderRadius:"5px", marginTop:"10px" , marginBottom:"10px"}}>Add To cart</button>
                            </div> 
                    </div>
                )
            })}
         </div>

    )
}

export default CandM