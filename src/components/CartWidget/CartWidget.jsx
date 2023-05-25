import "./CartWidget.scss"

const CartWidget = ({id}) =>{
   
   return (
    id === "desktop-cart"?
    <div id={id} className="col">
      <a id="cart-link" href="pages/cart.html">
          <span id="desktop-cart-counter">1</span>
      </a>            
    </div>
    :
    <div id={"cart-wrapper"}>
      <div id={id}>      
      </div>                    
      <a id="mobile-cart-link" href="pages/cart.html">
          <span id="mobile-cart-counter">1</span>
      </a>
    </div>
  )
} 

 export default CartWidget
