import React, { useEffect,useState } from "react"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import CarouselBanner from "../components/CarouselBanner/CarouselBanner"
import { getData } from "../helpers/getData";


const Home = () =>{
    
    
    
    const [products, setProducts]= useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        

        
        getData()
            .then((data)=>{
                setProducts(data)
                setLoading(false)
            })
            .catch((err=> console.log(err)))

    },[])


     return (
        <div>
            <CarouselBanner/>
            {loading
            ? <h2>Loading...</h2>
            :<ItemListContainer items={products}/>
            }
        </div>
    )
} 

 export default Home