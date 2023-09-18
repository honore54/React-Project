import React from "react"

export default function Home(){
    return(
        <div className="home" id="home">
         <div className="t1">
         <h2 className="text-1">Nike Shoes</h2>
         </div>
            <div className="t2">
            <h1 className="text-2">Just Do It.</h1>
            <p className="para">We Deliver for you for free and We hope your paternership will no longer end.</p>
            <img src="facebook-icon.svg" width={40} />&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="instagram-icon.svg" width={40} />&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="twitter-icon.svg" width={40} />
            </div>
            <img src="./assets/mine.jpeg" width="684px" height="590px" className="image" />
        </div>
    )
}