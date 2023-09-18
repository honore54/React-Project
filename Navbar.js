import React from "react"

export default function Nav(){
    return(
        <div className="nav">
            <nav>
            <svg fill="none" height="60" viewBox="0 0 20 20" width="90" xmlns="http://www.w3.org/2000/svg"><path d="M2.99707 3.49609C2.99707 3.21995 3.22093 2.99609 3.49707 2.99609H3.93543C4.66237 2.99609 5.07976 3.46917 5.32152 3.94075C5.4872 4.2639 5.6065 4.65813 5.70508 4.99951H15.9999C16.6634 4.99951 17.1429 5.63392 16.9619 6.27229L15.4664 11.5468C15.2225 12.4073 14.4368 13.0012 13.5423 13.0012H8.46306C7.56125 13.0012 6.77099 12.3977 6.5336 11.5277L5.89118 9.17338C5.88723 9.16268 5.88361 9.15177 5.88034 9.14067L4.851 5.6429C4.81568 5.52686 4.78318 5.41439 4.7518 5.3058C4.65195 4.96027 4.56346 4.65406 4.43165 4.39696C4.2723 4.08613 4.12597 3.99609 3.93543 3.99609H3.49707C3.22093 3.99609 2.99707 3.77224 2.99707 3.49609Z" fill="#212121"/><path d="M8.5 16.9995C9.32843 16.9995 10 16.3279 10 15.4995C10 14.6711 9.32843 13.9995 8.5 13.9995C7.67157 13.9995 7 14.6711 7 15.4995C7 16.3279 7.67157 16.9995 8.5 16.9995Z" fill="#212121"/><path d="M13.5 16.9995C14.3284 16.9995 15 16.3279 15 15.4995C15 14.6711 14.3284 13.9995 13.5 13.9995C12.6716 13.9995 12 14.6711 12 15.4995C12 16.3279 12.6716 16.9995 13.5 16.9995Z" fill="#212121"/></svg>
            <h1 className="logo">HonoreShop.com</h1>
            <ul>
                <li>
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#contact">Contact</a>
                    <a href="#login">Login</a>
                </li>
            </ul>
            </nav>


        </div>
    )
}