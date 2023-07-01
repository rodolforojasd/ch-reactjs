const AmountBtn = ({item}) =>{
     
     return (
        
            <div className="amount-wrapper">
                <span  className="amount-btn decrease-btn" type= "button" >-</span>
                <input className= "amount-input"  type="number" defaultValue="1" min="1" max={item.stock}/>
                <span  className="amount-btn increase-btn" type="button">+</span>   
            </div>
        
    )
} 

 export default AmountBtn





