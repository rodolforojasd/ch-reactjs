import "./CheckoutBtn.scss"
import {useContext} from "react"
import Button from "react-bootstrap/esm/Button"
import { LinkContainer } from "react-router-bootstrap"
import { CartContext } from "../../../../context/CartContext"


const CheckoutBtn = () =>{
     
 const {getCartCost, emptyCart} = useContext(CartContext)


     return (
        <div id="checkout-cart-wrapper" className="row checkout_total_wrapper">
            <div className="col">
                <h3>Total de compra: ${getCartCost()}</h3>
                <h4 type="button" className="text-button" onClick={emptyCart}>vaciar carrito</h4>
            </div>

            <LinkContainer className="col-2 checkout-btn-wrapper" to="/checkout">
                <Button id="checkout-button" className="btn btn-primary">Ir a comprar</Button>
            </LinkContainer>
           
        </div>
    )
} 

 export default CheckoutBtn