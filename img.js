import React from "react"


export default function Img(props){
  const image= props.on ? "like-filled.png" : "like.png"
return(
  <div>
    <img src={image} width={100} onClick={() => props.Update (props.id)} />
  </div>
)
}
  