import React, {useContext, useEffect} from "react";
import ItemCartContainer from "../components/ItemCartContainer/ItemCartContainer";
import { CartContext } from "../context/CartContext"


const Cart = () =>{
   
   
    const {cart} = useContext(CartContext)
    const cartPage = true


     return (

        <ItemCartContainer items={cart} cartPage={cartPage} />
    )
} 

 export default Cart