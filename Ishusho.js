import React from "react"
import myData from "./component/myData"
export default function Memes(){
const [allImages,setAllImages] = React.useState("")
    function Text(){
        const mydataArray = myData.data.profiles
        const myrandomNumber = Math.floor(Math.random() * mydataArray.length)
        setAllImages(mydataArray[myrandomNumber].title)
    }



    return (
        <div>
            <button onClick={Text}>get it</button>
            <h1>{allImages}</h1>
           
        </div>
    )
}
