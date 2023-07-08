import React, { useEffect,useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import { productManager } from "../helpers/ProductManager";


const Category = () =>{
    
    const {categoryId} = useParams()

    const [products, setProducts]= useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
       
        setLoading(true)
        
        productManager.getProducts(categoryId)
         .then((res)=>{
            const docs = res.docs.map((doc)=>{
                return {...doc.data(), code: doc.id}
            })
            setProducts(docs)
            console.log(docs)
         })
         .catch((err=> console.log(err)))
         .finally(()=>{
            setLoading(false)
         })
        
    },[categoryId])

     return (
        
        loading
        ? <ItemListContainer items={products} loading={loading} cards={6}/>
        :<ItemListContainer items = {products}/>
    )
} 

 export default Category
