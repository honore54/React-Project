// import React from "react";



// export default function App(){
//   const [list,setList] = React.useState([])
//   const [input,setInput] = React.useState('')

//   const addTodo = (todo) => {
//     const newTodo = {
//       id:Math.random(),
//       todo:todo,
//     }

//     setList([...list,newTodo])
//     setInput('')
//   }

//  const deleteTodo = (id) => {
//   const newList = list.filter((todo) => todo.id !==id)
//   setList(newList)
//  }
//   return(
//     <div>
//       <h1 className="heading">Todo List</h1>
//       <input  
//       type="text" 
//       value={input} 
//       onChange={(e) =>{
//       setInput(e.target.value)
//       }} placeholder="Type your task here..." className="enter"/>
//       <button onClick={() => addTodo(input)} className="click">AddTask</button>
//       <table border={1} className="uno">
//       <tbody>
    
//         {list.map((todo) => (
//           <td className="td">
//             {todo.todo} 
//             <button onClick={() => deleteTodo(todo.id)} className="so">&times;</button>
//           </td>
//         ))}
//       </tbody>

//       </table>
//     </div>
//   )
// }


































// import React from "react";
// import { info } from "./component/info";



// export default function App(){
//   const [search,setSearch] = React.useState('')
// console.log(search)
//   function handleSearch(e){
//     setSearch(e.target.value)
//   }
//  return (
//   <div>
//     <div className="title">
//       <h1>Contact <span>Keeper</span></h1>
//     </div>
//     <form>
//       <input type="text" value={search} onChange={handleSearch} placeholder="Search Contacts here...." />
//     </form>
//     <div className="container">
//       <table border={2}>
//         <thead>
//           <tr>
//             <th>Profile</th>
//             <th>FirstNames</th>
//             <th>LastNames</th>
//             <th>Emails</th>
//             <th>Phones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {info.filter((item) => {
//             return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search)
//           } 
//           ).map((items) => (
//                <tr key={items.id}>
//                 <td><img src={items.profile} width={28}/></td>
//                <td>{items.first_name}</td>
//                <td>{items.last_name}</td>
//                <td>{items.email}</td>
//                <td>{items.phone}</td>
//              </tr>
//           ))}
         
//         </tbody>

//       </table>
//     </div>
//   </div>
//  )
  
// }






































import React from "react"
import Nav from "./component/Navbar"
import Home from "./component/Home"
import Products from "./component/products"

import Data from "./component/Data"
import Form from "./component/myForm"
import { CartProvider } from "react-use-cart"
import Cart from "./component/Cart"


export default function App(){
const [like,setLike] = React.useState(Data)


function Like(id){
  setLike(prevState => {
    return prevState.map(likes => {
      return likes.id === id ? {...likes, on : !likes.on} : likes
    })
  })
}
function Unlike(id){
  setLike(prevState => {
    return prevState.map(likes => {
      return likes.id === id ? {...likes, off : !likes.off} : likes
    })
  })
}

    const data = like.map(shoes => {
        return    <Products
                key={shoes.id}
                id={shoes.id}
                on={shoes.on}
                off={shoes.off}
                shoes={shoes}
                Update={Like}
                Unlike={Unlike}
              
                
                
                 />
                 
                 
    })
    return(
     
       <div>
         <CartProvider>
         <Nav />
        <Home />
        
       
        {data}
        <Cart />
     <div>
     <Form />
     </div>
     </CartProvider>
       </div>
    
       
    )
}






// import React from "react"
// import details from "./details"
// import Img from "./img"

// export default function App(){
//   const [like,setLike] = React.useState(details)

//   function Update(id){
//     setLike(prevState => {
//       return prevState.map(change => {
//         return change.id === id ? {...change, on: !change.on} : change
//       })
//     })
//   }
//   const All = like.map(likes => (
//     <Img 
//     key={likes.id}
//     id={likes.id}
//     on={likes.on}
//     Update={Update}
//      />
//   ))
//   return(
//     <div>
//        {All}
//     </div>
//   )

// }
