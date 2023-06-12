import React, { useEffect,useState } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { getData } from "../helpers/getData";


const Category = () =>{
    
    const {categoryId} = useParams()

    const [products, setProducts]= useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        console.log(categoryId)
        setLoading(true)
        
        getData()
            .then((data)=>{
                setProducts(data.filter(products => products.category === categoryId))
                setLoading(false)
            })
            .catch((err=> console.log(err)))

    },[categoryId])

     return (
        
        loading
        ? <h2>Loading...</h2>
        :<ItemListContainer items = {products}/>
    )
} 

 export default Category