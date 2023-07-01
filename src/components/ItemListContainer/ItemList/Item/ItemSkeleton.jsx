import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ItemSkeleton = ({i}) =>{
     
     return (
       
            <div className="col-sm-6 col-md-6 col-lg-4 col-xlg-3 card-skeleton">
            <div  id={`${i}-skeleton-card`} className="card">
                
                <Skeleton height={"33vh"}/>
                <div className="card-body">
                    <Skeleton className={"card-text"} count={3}/>
                </div>   
            </div>
       
        </div>
        )
       
    
} 

 export default ItemSkeleton