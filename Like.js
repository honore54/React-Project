import React from "react"
import Data from "./Data"

export default function Like(props){
    const like =  props.isFilled ? "like.png" : "like-filled.png"
    return(
        <div>
            <img src={like} onClick={props.Check} width="30px" height="30px" className="like-icon"/>
            
        </div>
    )
}