import React,{useReducer} from "react";
import reducer from "./usereducer";

export const CartContext = React.createContext();

const iniState = [];  

const CartContextProvider = ({children}) => {
  const [state , dispatch] =  useReducer(reducer, iniState);
  console.log(dispatch);
  return (
          <CartContext.Provider value={{state , dispatch}}>
            {children}
          </CartContext.Provider>
          )
};

export default CartContextProvider;
