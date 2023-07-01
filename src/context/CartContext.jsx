import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('shoppingCart')) || []

export const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState(init)

    const addTocart = (item) => {
        setCart([...cart,item])
    }

    const IsInCart = (id) => {
        return cart.some((prod)=> prod.id === id )
    }

    const getCartCost = () => {
        return cart.reduce((acc,prod) => acc+prod.price,0)
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
        <CartContext.Provider value={(
                cart,
                addTocart,
                IsInCart,
                getCartCost,
                getTotalQuantity,
                emptyCart,
                deleteFromCart
            )}>
                {children}
        </CartContext.Provider>
    )
}