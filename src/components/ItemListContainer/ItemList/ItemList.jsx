import React from "react";
import Item from "./Item/Item.jsx";
import ItemSkeleton from "./Item/ItemSkeleton.jsx";


const ItemList = ({loading,items,cards}) =>{
     
    
     return (
            <div className = "row" id="products_showcase">
                <h2 className="center-text">Productos</h2>
              
                {loading
                ? Array(cards)
                .fill(0)
                .map((card, i) => 
                {return <ItemSkeleton key={i}/>})
                :
                items.map((product)=> {
                return  <Item key={product.code} item={product} />
                })}
            </div>
        )  
} 

 export default ItemList