import React from "react"
import { useCart } from "react-use-cart"


export default function Products(props){
   const {addItem} = useCart();
   
   
    const  Favorite = props.on ? "like-filled.png" : "like.png"
    const  Down = props.off ? "thumb-down-filled.png" : "thumb-down.png"
    

  
    return(
        <div id="products">
            <div className="title">
                <h1 className="h1"><span>||</span>{props.shoes.title}</h1>
            </div>
            <div className="card" >
                
                <img className="shoe1" src={props.shoes.img} width="400px" height="340px" />
                <h4>Mark:{props.shoes.mark}</h4>
             <h4>Price:${props.shoes.price}</h4>
                <div className="like">
                <img src={Favorite} onClick={() => props.Update (props.id)} width="30px" height="30px" className="like-icon"/>
                </div>
                <img src={Down} onClick={() => props.Unlike (props.id)} width="30px" height="30px" className="thumb-down"/>
             
                <button  onClick={()=>addItem(props.shoes)}>Add to Cart</button>
            </div>
        </div>
    )
}