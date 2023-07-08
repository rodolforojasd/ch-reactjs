import React from "react"
import "./ItemDetail.scss"
import { useNavigate } from "react-router-dom"
import AmountBtn from "../../ItemListContainer/ItemList/Item/AmountBtn/AmountBtn"


const ItemDetail = ({item}) =>{
     
    const navigate = useNavigate()
    const backPageHanddle = () => {
        navigate(-1)
    }


     return (
        <div>
            <div>
                    <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4 img-container">
                            <img src={"."+item.thumbnail} className="img-fluid rounded-start product-img" alt={item.title}/>
                            <div>
                                <h4 className="card-text product-description">{item.description}</h4>
                                {item.abv ?<p className="card-text"><strong>Abv.</strong>{item.abv} % </p>: null }                           
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className ="card-title">{item.title}</h3>
                                <p className="card-text"> $ {item.price}</p>
                                <p className="card-text"><small className="text-body-secondary">{item.stock}</small> unidades disponibles</p>
                            </div>
                            
                                <div className="row btn-wrappers" >
                                <AmountBtn item={item}/>
                                
                                    <div><button  className=" btn btn-primary">Comprar</button></div>
                                    <div><button onClick={backPageHanddle} className=" btn btn-primary">Volver</button></div>
                                    
                                </div>
                        </div>

                            
                    
                    </div>
                </div>
            </div>
        </div>
    )
} 

 export default ItemDetail