import "./CartWidget.scss"
import { useContext } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { CartContext } from "../../context/CartContext.jsx"



const CartWidget = ({id}) =>{


  const {getTotalQuantity,cart} = useContext(CartContext)


   return (
    
    id === "desktop-cart"?
    <div id={id} className="col">
      <LinkContainer id="cart-link" className={`cart-widget ${cart.length > 0?"cart-widget-active":""}`} to={"/cart"}>
        <span id="desktop-cart-counter">{getTotalQuantity()}</span>
      </LinkContainer>         
    </div>
    :
    <div id={"cart-wrapper"}>
      <div id={id}>      
      </div>
      <LinkContainer id="mobile-cart-link"  to={"/cart"}>
        <span id="mobile-cart-counter">{getTotalQuantity()}</span>
      </LinkContainer>                    
     
    </div>
  )
} 

 export default CartWidget
