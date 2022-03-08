import logo from './logo.svg';
import './App.css';
import React,{useState, useRef} from "react"
function App() {
  const [num,setNum] = useState("0");
  const inputOne = useRef();
  const inputTwo = useRef();
  const getNumBox = () =>{
    console.log("Hello")
    console.log(inputOne.current);
    inputOne.current.style.width="400px";
  }
  const getTextBox = () =>{
    console.log("hi")
    console.log(inputTwo.current);
  }
  return (
    <div >
     <input type="number" ref={inputOne} value={num} onChange={(e) => setNum(e.target.value)} style={{width:"100px"}}/>
     <input type="text" ref={inputTwo} value={num} onChange={(e) => setNum(e.target.value)}/>
     <h1>Value is:-{num}</h1>
     <button onClick={()=>getNumBox()}>Click one</button>
     <button onClick={()=>getTextBox()}>Click two</button>
    </div>
  );
}

export default App;
