import React from "react";
import ItemCartCard from "./ItemCartCard/ItemCartCard";
import CheckoutBtn from "./ItemCartCard/CheckoutBtn/CheckoutBtn.jsx"

function ItemCartContainer({ items, cartPage }) {



    return (
        <div className="cart-container">
            {items.map((product, index) => {
                return <ItemCartCard key={product.id} item={product} index={index} cartPage={cartPage} />;
            })}

            <CheckoutBtn />
        </div>
    );
} 

 export default ItemCartContainer