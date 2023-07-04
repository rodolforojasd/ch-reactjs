import React from "react";
import ItemCartCard from "./ItemCartCard/ItemCartCard";

const ItemCartContainer = ({items}) =>{
     
     return (
        <div>
        {items.map((product)=>{
            return <ItemCartCard key={product.id} item={product}/>
        })
        }
        </div>
    )
} 

 export default ItemCartContainer