import React from "react";
import './Item.scss'
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const Item = ({item}) =>{

    const category = useParams()

     return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xlg-3">
            <Card>
                <Link to={`/detail/${item.id}`} src={item.thumbnail}>
                    <Card.Img variant="top" src={!category?item.thumbnail:"."+item.thumbnail}  alt={item.title}/>
                </Link>
                
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="item-price"> Precio: ${item.price}</Card.Text>
                    <div className="amount-wrapper">
                                <span  className="amount-btn decrease-btn" type= "button" >-</span>
                                <input className= "amount-input"  type="number" defaultValue="1" min="1" max={item.stock}/>
                                <span  className="amount-btn increase-btn" type="button">+</span>   
                    </div>
                    <Card.Text type="button" className="btn btn-secondary addtocart">Agregar</Card.Text>  
                </Card.Body>
            </Card>
        </div>
        
    )
} 

 export default Item


