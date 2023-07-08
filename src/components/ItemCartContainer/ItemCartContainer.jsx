import React from "react";
import ItemCartCard from "./ItemCartCard/ItemCartCard";


const ItemCartContainer = ({items, cartPage}) =>{

   
   
     return (
        <div>
        {items.map((product, index)=>{
            return <ItemCartCard key={product.id} item={product} index={index} cartPage={cartPage}/>
        })
        }
        </div>
    )
} 

 export default ItemCartContainer