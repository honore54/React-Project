import React from "react";
import { useCart } from "react-use-cart";


export default function Cart(){
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
   
} 
  = useCart();
    if(isEmpty) return (
    <h1>Your Cart is Empty</h1>
    
    )
    
    return(
        <section>
            <div>
               <h5>Cart :({totalUniqueItems}) totalItems :({totalItems})</h5> 
               <table border={0}>
                <tbody>
                {items.map((item, index)=>{
                    return(
                    <tr key={index}>
                        <td>
                            <img src={item.img} style={{height:'5rem',borderRadius:'8px',border:'3px solid  rgb(64, 64, 64)'}} />
                        </td>
                        <td>{item.mark}</td>
                        <td>{item.price}</td>
                        <td>Quantity ({item.quantity})</td>
                        <td>
                            <button className="um" onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>
                            <button className="un" onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</button>
                            <button className="ur" onClick={()=>removeItem(item.id)}>RemoveItem</button>
                        </td>
                    </tr>
                    )
                })}
                </tbody>

               </table>
               <h2>TotalPrice:${cartTotal}</h2>
               <button  className="w" onClick={emptyCart}>Clear Cart</button>
            </div>
        </section>
    )
}