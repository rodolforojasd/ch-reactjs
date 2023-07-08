import './AmountBtn.scss'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../context/CartContext'




const AmountBtn = ({item, cartPage}) =>{




   const [quantity,setQuantity] = useState(cartPage?item.quantity:1)  

   const  {addToCart}= useContext(CartContext)

   

   const handleLess = async () => {

        quantity > 1 && setQuantity(quantity - 1)
        quantity > 1 && cartPage && handleAddToCart(quantity-1) 
   }

   const handleMore = async() => {

        quantity < item.stock &&  setQuantity(quantity+1)
        quantity < item.stock && cartPage && handleAddToCart(quantity+1) 
    }

   
   const handleAddToCart = (amount) => {

        
        const  newItem = cartPage
                        ?   {
                            ...item, quantity:amount
                            }
                        : {...item, quantity}
        
        addToCart(newItem,cartPage)
    }

     return (
                    
        <div id="add_cart_button">
            <div className = "amount-wrapper">
                <span id = {`${item.id}-decrease-btn`} className = "amount-btn decrease-btn" type= "button" onClick={handleLess} >-</span>
                <input className= "amount-input" id = {`${item.id}-amount`} onChange={()=>setQuantity(quantity)} type="number" value={quantity} min="1" max ={item.stock}/>
                <span id = {`${item.id}-increase-btn`} className = "amount-btn increase-btn" type="button" onClick={handleMore}>+</span>   
            </div>
            {cartPage
            ?
            null                     
            :
            <button id = {`${item.id}-addToCart-button`}  type="button" className="btn btn-secondary addtocart" onClick={handleAddToCart}>Agregar al carrito</button>
            }
        </div>
    )
} 

 export default AmountBtn





