import React, { useEffect,useState } from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import CarouselBanner from "../components/CarouselBanner/CarouselBanner"
import { productManager } from "../helpers/ProductManager";

const Home = () =>{
    
    
    
    const [products, setProducts]= useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>  {
       setLoading(true)

        
        productManager.getProducts()
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
        
    },[])


     return (
        <div>
           
            <CarouselBanner/>
            {loading
            ? <ItemListContainer items={products} loading={loading} cards={10}/>
            :<ItemListContainer items={products}/>
            }
        </div>
    )
} 

 export default Home