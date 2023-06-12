import React from "react";
import Item from "./Item/Item.jsx";

const ItemList = ({items}) =>{
     
     return (

       
        <div className = "row" id="products_showcase">
            <h2 className="center-text">Productos</h2>
            {items.map((product)=> {
            return  <Item key={product.id} item={product} />
        })}
        </div>
    )
} 

 export default ItemList