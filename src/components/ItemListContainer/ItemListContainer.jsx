// import React, { useEffect,useState } from "react";
import ItemList from "./ItemList/ItemList";
// import {getData} from "../../helpers/getData.js"

const ItemListContainer = ({items, loading, cards}) =>{
     
     return (
        <div className="container">          
            <ItemList items={items}  loading={loading} cards= {cards}/>            
        </div>
    )
} 

 export default ItemListContainer