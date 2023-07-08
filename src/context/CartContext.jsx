import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('shoppingCart')) || []

export const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState(init)


    const addToCart = (item, cartPage) => {
      
       const inCart = isInCart(item.id) 
       if(inCart === -1){
            setCart([...cart, item])
       }else if (inCart !== -1 && cartPage){
            cart[inCart].quantity = item.quantity
            const newCart = cart
            setCart([...newCart])
            
       }else{
           cart[inCart].quantity = cart[inCart].quantity + item.quantity
           const newCart = cart
           setCart([...newCart])  
       } 
    }

    const isInCart = (id) => {
        return  cart.findIndex((prod)=> prod.id === id )
    }


    const getCartCost = () => {
        return cart.reduce((acc,prod) => acc+(prod.price*prod.quantity),0)
    }

    const getTotalQuantity = () => {
        return cart.reduce((acc,prod) => acc+prod.quantity,0)
    }


    const emptyCart = () => {
        setCart([])
    }

    const deleteFromCart = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }


    useEffect(()=>{
        localStorage.setItem('shoppingCart', JSON.stringify(cart))
    },[cart])

 

    return (
        <CartContext.Provider value={{
                cart,
                addToCart,
                isInCart,
                getCartCost,
                getTotalQuantity,
                emptyCart,
                deleteFromCart
        }}>
                {children}
        </CartContext.Provider>
    )
}