import { useEffect,useState } from "react"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import { useParams } from "react-router-dom"
import { productManager } from "../helpers/ProductManager"

const ItemPage = () =>{


    const [product,setProduct]= useState(null)
    const [loading, setLoading]= useState(true)

    const {itemCode}= useParams()

    useEffect(()=>{
        
        setLoading(true)

        
        productManager.getProductById(itemCode)
        .then((doc) => {
            console.log(doc.id)
            console.log(doc.data())
            setProduct({
                code: doc.id,
                ...doc.data()
            })
        })
        .finally(() => setLoading(false))

}, [itemCode])



  

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