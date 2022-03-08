import React, { useState, useEffect } from 'react';

const getLocalData = () =>{
    const list = localStorage.getItem("todoList");
    if(list){
        return JSON.parse(list);
    }
    else{
        return [];
    }
}

const ToDo = () => {
    const[item,setItem] = useState("");
    const[data,setData] = useState(getLocalData());
    const[editedData,setEditedData] = useState("")
    const dataHandler = () =>{
        if(!item){
            alert("Please fill item name")
        }
        else{
            const uniqueId = {
               id : new Date().getTime().toString(),
               name : item
            }
            setData([...data,uniqueId])
            setItem("");
        }
        
    };
    const deleteHandler = (index) =>{
       const updatedData = data.filter((cur)=>{
           return cur.id !== index
       })
       setData(updatedData);
    }
    const editHandler = (index) =>{
      const editedData = data.find((cur)=>{
          return cur.id === index
      })
      setItem(editedData.name)
       setEditedData(index);
    }
    const myStyle = {
        textAlign:"center",backgroundColor:"pink" ,height:"100vh"
    }
    useEffect(()=>{
       localStorage.setItem("todoList",JSON.stringify(data))
    },[data])
  return (
    <div style={myStyle}>
       <img src="./todologo.png" alt="todologo" style={{width:"100px" ,height:"150px"}}/>
       <h3>Item List Editor</h3>
       <div>
       <input type="text" placeholder="Add item here" 
       value={item} onChange={(e)=>setItem(e.target.value)}
       />
       <button onClick={dataHandler}><span>Add</span></button>
       <br />
       <div>
       {data.map((cur)=>{
           return <div key={cur.id}>
           <h3 >{cur.name} <button onClick={()=>editHandler(cur.id)}><span>Edit</span></button>
           <button onClick={()=>deleteHandler(cur.id)}><span>Delete</span></button></h3>  
           </div> 
      
       })}
       {/* <h3>{getLocalData()}</h3> */}
       </div>
       </div>
       <button onClick={()=>setData([])}><span>Remove All</span></button>
    </div>  
  )
}

export default ToDo