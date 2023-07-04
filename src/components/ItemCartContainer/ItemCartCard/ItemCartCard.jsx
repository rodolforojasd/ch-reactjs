import AmountBtn from "../../ItemListContainer/ItemList/Item/AmountBtn/AmountBtn"



const ItemCartCard = ({item}) =>{
     
     return (
    <div className = "card mb-3 cart-card" style={{maxWidth: "100%"}}>
            <div className = "row g-0">
                <div className = "row g-0 d-flex align-items-center card-body">

                    <div className = "col-2">
                        <img src={`${item.db === "coktaildb"?item.thumbnail:"."+item.thumbnail}`} className="img-fluid rounded-start" alt={item.title}/>
                    </div>
                    <div className = "col-6 text-center ">
                        <h3 className = "card-title ">${item.title}</h3>
                    </div>
                    <div id="cart-amount-wrapper" className = "col">
                        <AmountBtn item={item}/>                        
                        <p className = "card-text"><small className = "text-body-secondary"> Hay ${item.stock} disponibles</small></p>
                    </div>
                    
                    <div className = "col d-flex justify-content-around">
                        <p className = "cart-item-price"><bold>${item.quantity*item.price}</bold></p>
                       <button id={`${item.id}-delete_button`} className = "btn btn-outline-secondary deletebtn" data-bs-toggle="modal" data-bs-target={`#${item.id}modal`}>
                            <i id={`${item.id}-delete_icon`} className = "bi bi-trash"></i>
                       </button> 
                    </div>
                   
                    {/* <div class="modal fade" id="${p.id}modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${p.id}Label" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title fs-5" id="${p.id}Label">Eliminar Producto</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                               Quieres eliminar ${p.title} de tu selección?
                            </div>
                            <div class="modal-footer">
                                <button type="button" id="${p.id}-del-confirm" class="btn btn-primary">Eliminar</button>
                                <button  type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
} 

 export default ItemCartCard