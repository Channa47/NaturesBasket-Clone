import React from "react";
import Slideshow from "../Components/slideshow";
import Slideshow2 from "../Components/Slideshow2";
import Footer from '../Components/Footer';


function Home (){
    return <div style={{width:"95%" , margin:"auto" , marginTop:"20px" }}>
             <img padding="auto" style={{borderRadius:"10px"}} src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg?v=12" />
             <Slideshow />
             <Slideshow2 />
             {/* <Footer /> */}
           </div>

}


export default Home