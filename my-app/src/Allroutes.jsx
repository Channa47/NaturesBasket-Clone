import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/cart"
import SinglePage from "./pages/singleProduct"
import FandF from "./pages/f&f"
import CandM from "./pages/c&c"

function AllTRoutes (){
    return (
           <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/cart" element={<Cart />}></Route>
             <Route path="/singlepage" element={<SinglePage />}></Route>
             <Route path="FandF" element = {<FandF />}></Route>
             <Route path="CandM" element={<CandM />}></Route>
           </Routes>
           )
}
export default AllTRoutes