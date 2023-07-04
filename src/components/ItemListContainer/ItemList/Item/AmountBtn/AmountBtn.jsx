import './AmountBtn.scss'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../context/CartContext'
import { useParams } from "react-router-dom";

const AmountBtn = ({item}) =>{

   const {cartPage} = useParams()

   const isCartPage  = cartPage === "cart" 
   const [quantity,setQuantity] = useState(isCartPage?item.stock:1)  

   const  {addToCart}= useContext(CartContext)

   const handleLess = () => {
        quantity <= 1? setQuantity(1):setQuantity(quantity-1)
        if (isCartPage){handleAddToCart() } 
   }

   const handleMore = () => {
        quantity >= item.stock? setQuantity(item.stock):setQuantity(quantity+1)
        if (isCartPage){handleAddToCart() } 
   }

   const handleAddToCart = () => {
        let  newItem = {...item} 
        isCartPage
        ?
        item.quantity = quantity 
        :
        newItem = {
            ...item
        }
        addToCart(newItem)
   }



     return (
                    
        <div id="add_cart_button">
            <div className = "amount-wrapper">
                <span id = {`${item.id}-decrease-btn`} className = "amount-btn decrease-btn" type= "button" onClick={handleLess} >-</span>
                <input className= "amount-input" id = {`${item.id}-amount`} type="number" value={quantity} min="1" max = {item.stock}/>
                <span id = {`${item.id}-increase-btn`} class="amount-btn increase-btn" type="button" onClick={handleMore}>+</span>   
            </div>
            {isCartPage
            ?
            null                     
            :
            <button id = {`${item.id}-addToCart-button`}  type="button" class="btn btn-secondary addtocart" onClick={handleAddToCart}>Agregar al carrito</button>
            }
        </div>
    )
} 

 export default AmountBtn





