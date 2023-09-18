import React from "react"

export default function Form(){
    const [formData,setFormData] = React.useState({
        email:"",
        password:"",
        confirmPassword:"",
        join:false
    })
    function CheckData(event){
        const {name,value,type,checked} = event.target
        setFormData(prevData => ({
            ...prevData,
            [name] : type === "checkbox" ? checked : value
        }))
    }
    function Keep(event){
   event.preventDefault()
   if(formData.password === formData.confirmPassword){
    console.log("Successfully you Signed Up!")
   } 
   else{
    console.log("Password do not match")
    return
   }
   if(formData.join){
    console.log("Thank you to Join our Platform")
   }
    }
    return(
    
        <div className="form-cont" id="login">
            <form onSubmit={Keep}>
                <input type="email" placeholder="Enter Your Email..." name="email" value={formData.email} onChange={CheckData} />
                <input type="password" placeholder="Enter Your Password..." name="password" value={formData.password} onChange={CheckData}  />
                <input type="password" placeholder="Confirm your Password..." name="confirmPassword" value={formData.confirmPassword} onChange={CheckData}  />
                <label htmlFor="letsgo" className="tt">Ready to Join HonoreShop Platform</label>
                <input className="bex" type="checkbox" id="letsgo" name="join" checked={formData.join} onClick={CheckData} />
                <button className="sbt" onClick={Keep}>Sign-Up</button>
            </form>
            <div className="mine">
            <div className="home" id="home">
         <div className="t1">
         <h2 className="text-1">Nike Shoes</h2>
         </div>
            <div className="t2">
            <h1 className="text-2">Just Do It.</h1>
            <p className="para">You Can Get In Touch With Us By Signing Up For More Informations.</p>
            <img src="facebook-icon.svg" width={40} />&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="instagram-icon.svg" width={40} />&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="twitter-icon.svg" width={40} />
            </div>
            </div>
            </div>
        </div>
    )
}