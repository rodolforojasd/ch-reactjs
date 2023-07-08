import { useContext,useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Trash3Fill} from 'react-bootstrap-icons'
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../../../context/CartContext';


const ItemDeleteModal = ({item}) =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {deleteFromCart} = useContext(CartContext)

  const handleDeleteItem = ()=>{
    deleteFromCart(item.id)
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <Trash3Fill/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¿Quieres borrar este producto?</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} 
          style={
            {backgroundColor:'grey'
            }}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleDeleteItem}>
            Si, Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemDeleteModal;



// const ItemDeleteModal = ({item}) =>{
     
//      return (
//         <div className = "modal fade" id={`${item.id}modal`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby={`${item.id}Label`} aria-hidden="true">
//             <div className = "modal-dialog">
//                 <div className = "modal-content">
//                     <div className = "modal-header">
//                         <h4 className = "modal-title fs-5" id={`${item.id}Label`}>Eliminar Producto</h4>
//                         <button type="button" className = "btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div className = "modal-body">
//                          Quieres eliminar ${item.title} de tu selección?
//                     </div>
//                     <div className = "modal-footer">
//                         <button type="button" id={`${item.id}-del-confirm`} className = "btn btn-primary">Eliminar</button>
//                         <button  type="button" className = "btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// } 

//  export default ItemDeleteModal