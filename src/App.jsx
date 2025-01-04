import { createElement } from "react";
import "./App.css";
function App() {
  //let a = createElement("h1",[],"hello from element")
  let name = "ashafak"
  let ob = {
    fname : "naveen bhai",
    age : 21
  }
  return (
    //a
    <>
       <h1>my name is {name} </h1>
       <h2>{ob.fname}</h2>

       <h3>{ob.age}</h3>
    </>
  )
}
export default App;
