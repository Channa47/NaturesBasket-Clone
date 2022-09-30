import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/cart"
import SinglePage from "./pages/singleProduct"

function AllTRoutes (){
    return (
           <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/cart" element={<Cart />}></Route>
             <Route path="/singlepage" element={<SinglePage />}></Route>
           </Routes>

           )
}
export default AllTRoutes