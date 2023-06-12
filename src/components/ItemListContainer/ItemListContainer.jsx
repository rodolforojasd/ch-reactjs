// import React, { useEffect,useState } from "react";
import ItemList from "./ItemList/ItemList";
// import {getData} from "../../helpers/getData.js"

const ItemListContainer = ({items}) =>{
     
    // const [products, setProducts]= useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     console.log(categoryId)
        
    //     let allProducts = undefined
        
    //     getData()
    //         .then((data)=>{
    //             allProducts = data
    //             categoryId
    //             ? setProducts(allProducts.filter(products => products.category === categoryId))
    //             : setProducts(allProducts)
        
    //             console.log(categoryId)
    //             setLoading(false)
    //         })
    //         .catch((err=> console.log(err)))

    //     console.log(allProducts)
       


    // },[categoryId])

     return (
        <div className="container">
          
            <ItemList items={items}/>
            
        </div>
    )
} 

 export default ItemListContainer