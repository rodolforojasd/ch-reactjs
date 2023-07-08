import AmountBtn from "../../ItemListContainer/ItemList/Item/AmountBtn/AmountBtn"
import ItemDeleteModal from "./ItemDeleteModal/ItemDeleteModal"


const ItemCartCard = ({item, cartPage, index}) =>{
         
     return (
    
    <div className = "card mb-3 cart-card" style={{maxWidth: "100%"}}>
            <div className = "row g-0">
                <div className = "row g-0 d-flex align-items-center card-body">

                    <div className = "col-2">
                        <img src={`${item.db === "coktaildb"?item.thumbnail:"."+item.thumbnail}`} className="img-fluid rounded-start" alt={item.title}/>
                    </div>
                    <div className = "col-6 text-center ">
                        <h3 className = "card-title ">{item.title}</h3>
                    </div>
                    <div id="cart-amount-wrapper" className = "col">
                        <AmountBtn item={item} cartPage={cartPage} index={index}/>                        
                        <p className = "card-text"><small className = "text-body-secondary"> Hay {item.stock} disponibles</small></p>
                    </div>
                    
                    <div className = "col d-flex justify-content-around">
                        <p className = "cart-item-price"><bold>${item.quantity*item.price}</bold></p>
                        <ItemDeleteModal item={item}/>
                       
                    </div>
                   
                </div>
            </div>
        </div>
    )
} 

 export default ItemCartCard