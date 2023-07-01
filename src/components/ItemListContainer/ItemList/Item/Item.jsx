import React from "react";
import './Item.scss'
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AmountBtn from "./AmountBtn/AmountBtn";


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
                    <Card.Text className="item-price">{"Precio: $"+item.price}</Card.Text>
                    <AmountBtn item={item}/>
                <Card.Text type="button" className="btn btn-secondary addtocart">{"Agregar"}</Card.Text>  
                </Card.Body>
            </Card>
        </div>
        
    )
} 

 export default Item


