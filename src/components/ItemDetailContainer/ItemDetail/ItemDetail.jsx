import React from "react"
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
                        <div className="col-md-4">
                            <img src={"."+item.thumbnail} className="img-fluid rounded-start" alt={item.title}/>
                            <div>
                                <p className="card-text">{item.description}</p>
                                {item.abv}?<p className="card-text"><strong>Abv.</strong>{item.abv}%</p>                               
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className ="card-title">{item.title}</h5>
                                <p className="card-text"> $ {item.price}</p>
                                <p className="card-text"><small className="text-body-secondary">{item.stock}</small> unidades disponibles</p>
                            </div>
                            <AmountBtn item={item}/>
                                <div className="row">
                                    <button  className="btn btn-primary">Comprar</button>
                                    <button onClick={backPageHanddle} className="btn btn-primary">Volver</button>
                                </div>
                        </div>

                            
                    
                    </div>
                </div>
            </div>
        </div>
    )
} 

 export default ItemDetail