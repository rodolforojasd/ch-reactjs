import { useEffect,useState } from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom"
import { getDataById } from "../helpers/getData"

const ItemPage = () =>{


    const [product,setProduct]= useState({})
    const [loading, setLoading]= useState(true)

    const {productId}= useParams()

    useEffect(()=>{
        debugger
        
        console.log(productId)
        
        getDataById(parseInt(productId))
            .then((data)=>{
                setProduct(data)
                
            })
            .catch((err=> console.log(err)))
            .finally(()=>
                setLoading(false)
            )
        },[productId])

  

//cuando intento usar useEffect aca me sale que no puedo iterar sobre un objeto boleano
     return (
        <div>
            {   loading
                ?<h2>Loading..</h2>
                :<ItemDetailContainer item = {product}/> 
            }   
        </div>
    )
} 

 export default ItemPage